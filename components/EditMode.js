import { useState, useEffect, useRef } from 'react';

const CONFIG = {
  GITHUB_REPO: '42778312/GlanzFaktor',
  GITHUB_BRANCH: 'main',
  API_BASE: '/api/github-proxy',
  STORAGE_KEY: 'glanzfaktor_edit_mode',
};

export default function EditMode() {
  const [isActive, setIsActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [pendingChanges, setPendingChanges] = useState([]);
  const [notification, setNotification] = useState(null);
  const [editingImg, setEditingImg] = useState(null); // { element, src }
  const [newImageData, setNewImageData] = useState(null);
  const [newImageName, setNewImageName] = useState(null);
  const userPasswordRef = useRef(null);

  // Check URL for ?edit=true or ?editmode=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('edit') === 'true' || params.get('editmode') === 'true') {
      const saved = sessionStorage.getItem('edit_password');
      if (saved && sessionStorage.getItem(CONFIG.STORAGE_KEY) === 'true') {
        userPasswordRef.current = saved;
        setIsActive(true);
      } else {
        setShowLogin(true);
      }
    }
  }, []);

  // Make images clickable when edit mode active
  useEffect(() => {
    if (!isActive) return;

    const imgs = document.querySelectorAll('img');
    const handlers = [];

    imgs.forEach((img) => {
      if (img.width < 30 || img.height < 30) return;
      const handler = () => setEditingImg({ src: img.getAttribute('src'), element: img });
      img.addEventListener('click', handler);
      img.style.cursor = 'pointer';
      img.style.outline = '2px dashed #F7931E';
      handlers.push({ img, handler });
    });

    return () => {
      handlers.forEach(({ img, handler }) => {
        img.removeEventListener('click', handler);
        img.style.cursor = '';
        img.style.outline = '';
      });
    };
  }, [isActive]);

  const showNotif = (msg, type = 'info') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const authenticate = async () => {
    if (!password) { setError('Bitte Passwort eingeben!'); return; }
    setLoading(true);
    setError('Überprüfe Passwort...');
    try {
      const res = await fetch(`${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}`, {
        headers: { 'X-Password': password },
      });
      if (res.ok) {
        userPasswordRef.current = password;
        sessionStorage.setItem('edit_password', password);
        sessionStorage.setItem(CONFIG.STORAGE_KEY, 'true');
        setShowLogin(false);
        setIsActive(true);
        setError('');
      } else if (res.status === 401) {
        setError('Falsches Passwort!');
      } else {
        setError('Fehler beim Anmelden.');
      }
    } catch {
      setError('Verbindungsfehler.');
    } finally {
      setLoading(false);
    }
  };

  const exitEditMode = () => {
    if (pendingChanges.length > 0 && !confirm('Sie haben ungespeicherte Änderungen. Wirklich beenden?')) return;
    sessionStorage.removeItem(CONFIG.STORAGE_KEY);
    sessionStorage.removeItem('edit_password');
    const url = new URL(window.location.href);
    url.searchParams.delete('edit');
    url.searchParams.delete('editmode');
    window.location.href = url.toString();
  };

  const applyImageChange = () => {
    if (!newImageData || !editingImg?.element) {
      showNotif('⚠️ Bitte wählen Sie erst ein Bild aus!', 'warning');
      return;
    }
    const oldSrc = editingImg.src;
    editingImg.element.src = newImageData;
    setPendingChanges((prev) => [...prev, { element: editingImg.element, oldSrc, newImageData, newImageName }]);
    setEditingImg(null);
    setNewImageData(null);
    setNewImageName(null);
    showNotif('✅ Änderung vorgemerkt!', 'success');
  };

  const saveChanges = async () => {
    if (pendingChanges.length === 0) { showNotif('⚠️ Keine Änderungen zum Speichern!', 'warning'); return; }
    showNotif('⏳ Speichere Änderungen...', 'info');
    try {
      const fileRes = await fetch(
        `${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/home.html&ref=${CONFIG.GITHUB_BRANCH}`,
        { headers: { 'X-Password': userPasswordRef.current } }
      );
      const fileData = await fileRes.json();
      let html = atob(fileData.content);

      for (const change of pendingChanges) {
        const newPath = `Assest/uploads/${Date.now()}_${change.newImageName}`;
        const base64 = change.newImageData.split(',')[1];
        await fetch(`${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/${newPath}`, {
          method: 'PUT',
          headers: { 'X-Password': userPasswordRef.current, 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: `Upload: ${newPath}`, content: base64, branch: CONFIG.GITHUB_BRANCH }),
        });
        html = html.replace(new RegExp(escRe(change.oldSrc), 'g'), newPath);
      }

      const updated = btoa(unescape(encodeURIComponent(html)));
      await fetch(`${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/home.html`, {
        method: 'PUT',
        headers: { 'X-Password': userPasswordRef.current, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Update images via edit mode', content: updated, sha: fileData.sha, branch: CONFIG.GITHUB_BRANCH }),
      });

      showNotif('✅ Gespeichert! Seite wird neu geladen...', 'success');
      setPendingChanges([]);
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      showNotif('❌ Fehler: ' + err.message, 'error');
    }
  };

  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const notifColors = { success: '#4CAF50', error: '#f44336', warning: '#ff9800', info: '#2196F3' };

  if (!showLogin && !isActive) return null;

  return (
    <>
      {/* Login Dialog */}
      {showLogin && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <h2 style={{ margin: '0 0 20px', color: '#333' }}>🔒 Edit Mode Aktivieren</h2>
            <p style={{ color: '#666', marginBottom: 20 }}>Geben Sie das Passwort ein:</p>
            <input
              type="password"
              style={styles.input}
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && authenticate()}
              autoFocus
            />
            {error && (
              <div style={{ color: '#d32f2f', background: '#ffebee', padding: 10, borderRadius: 6, marginBottom: 10 }}>
                {error}
              </div>
            )}
            <button style={{ ...styles.btn, background: '#F7931E', color: 'white', marginBottom: 8 }} onClick={authenticate} disabled={loading}>
              {loading ? 'Bitte warten...' : 'Anmelden'}
            </button>
            <button style={{ ...styles.btn, background: '#f1f1f1', color: '#333' }} onClick={() => setShowLogin(false)}>
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {/* Edit Mode Indicator Bar */}
      {isActive && (
        <div style={styles.indicator}>
          <span>📝 <strong>Edit Mode</strong></span>
          <span style={styles.badge}>{pendingChanges.length} Änderung{pendingChanges.length !== 1 ? 'en' : ''}</span>
          <button style={styles.indBtn} onClick={saveChanges}>💾 Speichern</button>
          <button style={styles.indBtn} onClick={exitEditMode}>❌ Beenden</button>
        </div>
      )}

      {/* Image Editor Modal */}
      {editingImg && (
        <div style={styles.overlay}>
          <div style={{ ...styles.dialog, maxWidth: 600 }}>
            <h3 style={{ marginBottom: 16 }}>📸 Bild bearbeiten</h3>
            <div style={{ background: '#f5f5f5', padding: 10, borderRadius: 6, fontFamily: 'monospace', fontSize: 12, wordBreak: 'break-all', marginBottom: 14 }}>
              <strong>Aktueller Pfad:</strong><br />{editingImg.src}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={newImageData || editingImg.src} alt="preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: 8, border: '2px solid #ddd', marginBottom: 14 }} />
            <label style={{ display: 'block', padding: 14, background: '#F7931E', color: 'white', textAlign: 'center', borderRadius: 8, cursor: 'pointer', fontWeight: 600, marginBottom: 10 }}>
              📁 Neues Bild wählen
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  setNewImageName(file.name);
                  const reader = new FileReader();
                  reader.onload = (ev) => setNewImageData(ev.target.result);
                  reader.readAsDataURL(file);
                }}
              />
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ ...styles.btn, background: '#4CAF50', color: 'white', flex: 1 }} onClick={applyImageChange}>💾 Übernehmen</button>
              <button style={{ ...styles.btn, background: '#f1f1f1', color: '#333', flex: 1 }} onClick={() => { setEditingImg(null); setNewImageData(null); }}>Abbrechen</button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div style={{
          position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          background: notifColors[notification.type] || '#2196F3',
          color: 'white', padding: '15px 30px', borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 1000001, fontWeight: 600,
          animation: 'slideUp 0.3s ease',
        }}>
          {notification.msg}
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', zIndex: 999999,
  },
  dialog: {
    background: 'white', padding: 40, borderRadius: 12, maxWidth: 500,
    width: '90%', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto',
  },
  input: {
    width: '100%', padding: 12, margin: '10px 0', border: '2px solid #ddd',
    borderRadius: 6, fontSize: 16, boxSizing: 'border-box', display: 'block',
  },
  btn: {
    width: '100%', padding: 12, border: 'none', borderRadius: 6,
    fontSize: 16, cursor: 'pointer', fontWeight: 600, display: 'block',
  },
  indicator: {
    position: 'fixed', top: 20, right: 20, background: '#F7931E', color: 'white',
    padding: '15px 25px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 999998, display: 'flex', gap: 15, alignItems: 'center',
  },
  badge: {
    background: 'white', color: '#F7931E', padding: '4px 10px', borderRadius: 12,
    fontWeight: 'bold', fontSize: 14,
  },
  indBtn: {
    padding: '8px 16px', border: '2px solid white', background: 'transparent',
    color: 'white', borderRadius: 6, cursor: 'pointer', fontWeight: 600,
  },
};
