# GlanzFaktor Image Edit Mode

## 📝 Übersicht

Diese Funktion ermöglicht es, Bilder auf der Website direkt zu bearbeiten, **ohne Backend oder Datenbank**! Alle Änderungen werden über die GitHub API direkt ins Repository committed und lösen eine automatische Vercel-Neubereitstellung aus.

## 🚀 Aktivierung

### Schritt 1: Edit Mode öffnen

Besuchen Sie die Website mit dem `?edit=true` Parameter:

```
https://glanzfaktor-konzept.vercel.app/?edit=true
```

### Schritt 2: Anmelden

Sie werden nach zwei Dingen gefragt:

1. **Passwort**: `glanzfaktor2026` (kann in `Assest/edit-mode.js` geändert werden)
2. **GitHub Personal Access Token**: Siehe unten wie man es erstellt

### Schritt 3: GitHub Token erstellen

1. Gehen Sie zu [GitHub Settings → Personal Access Tokens](https://github.com/settings/tokens/new)
2. Klicken Sie auf "Generate new token (classic)"
3. Geben Sie einen Namen ein: z.B. "GlanzFaktor Edit Mode"
4. Wählen Sie die **repo** Berechtigung (alle Checkboxen unter "repo")
5. Klicken Sie auf "Generate token"
6. **WICHTIG**: Kopieren Sie das Token sofort - es wird nur einmal angezeigt!
7. Fügen Sie das Token in das Login-Formular ein

## 🎨 Bilder bearbeiten

### Nachdem Sie angemeldet sind:

1. **Oben rechts** sehen Sie eine orange Box mit "Edit Mode"
2. **Hovern Sie über Bilder** - sie werden orange hervorgehoben mit "✏️ Bearbeiten"
3. **Klicken Sie auf ein Bild** um es zu bearbeiten
4. **Wählen Sie ein neues Bild** von Ihrem Computer
5. **Klicken Sie "Übernehmen"** - das Bild wird vorgemerkt
6. **Wiederholen Sie** für alle Bilder die Sie ändern möchten
7. **Klicken Sie "💾 Speichern"** oben rechts

### Was passiert beim Speichern:

1. ✅ Neue Bilder werden nach `Assest/uploads/` hochgeladen
2. ✅ Die `home.html` wird aktualisiert mit neuen Bildpfaden
3. ✅ Alte Bilder werden aus dem Repository gelöscht
4. ✅ Änderungen werden committed mit "Update images from edit mode"
5. ✅ Vercel erkennt den Commit und deployed automatisch neu (1-2 Minuten)
6. ✅ Die Seite wird automatisch neu geladen

## 🔒 Sicherheit

- **Passwortgeschützt**: Nur wer das Passwort kennt kann den Edit Mode aktivieren
- **GitHub Token**: Wird nur in der Session gespeichert, nicht dauerhaft
- **Keine öffentliche API**: Alles läuft über GitHub's sichere API
- **Versionskontrolle**: Alle Änderungen sind in Git nachvollziehbar

## 🛠️ Konfiguration

Sie können die Einstellungen in `Assest/edit-mode.js` ändern:

```javascript
const CONFIG = {
    GITHUB_REPO: '42778312/GlanzFaktor',  // Ihr Repository
    GITHUB_BRANCH: 'main',                 // Branch
    PASSWORD: 'glanzfaktor2026',           // Ihr Passwort
    // ...
};
```

## ⚠️ Wichtige Hinweise

- **Speicherzeit**: Nach dem Speichern dauert es 1-2 Minuten bis die Änderungen live sind
- **Token-Sicherheit**: Geben Sie Ihr GitHub Token niemals weiter!
- **Bildgröße**: Empfohlen unter 2MB pro Bild für schnellere Uploads
- **Formate**: Unterstützt JPG, PNG, GIF, WebP, SVG

## 🆘 Probleme?

### Token wird nicht akzeptiert:
- Stellen Sie sicher, dass die **repo** Berechtigung ausgewählt ist
- Prüfen Sie ob das Repository korrekt in der CONFIG steht

### Speichern schlägt fehl:
- Prüfen Sie Ihre Internetverbindung
- Token könnte abgelaufen sein - erstellen Sie ein neues
- Öffnen Sie die Browser Console (F12) für Details

### Änderungen erscheinen nicht:
- Warten Sie 1-2 Minuten für Vercel Deployment
- Leeren Sie den Browser-Cache (Strg + F5)
- Prüfen Sie auf [Vercel Dashboard](https://vercel.com) ob Deployment läuft

## 🎯 Features

- ✅ Keine Backend-Server nötig
- ✅ Keine Datenbank nötig
- ✅ Passwortgeschützt
- ✅ Alte Bilder werden automatisch gelöscht
- ✅ Echtzeit-Vorschau
- ✅ Änderungszähler
- ✅ Versioniert über Git
- ✅ Automatisches Deployment
- ✅ Mobile-freundlich

## 🔄 Edit Mode beenden

Klicken Sie auf "❌ Beenden" oben rechts. Bei ungespeicherten Änderungen werden Sie gewarnt.

---

**Entwickelt mit ❤️ für GlanzFaktor**
