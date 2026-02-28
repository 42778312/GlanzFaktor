# 🎉 Edit Mode ist jetzt aktiv!

## ✅ Was wurde implementiert:

1. **Edit Mode Script** (`Assest/edit-mode.js`)
   - Passwortgeschützte Bildbearbeitung
   - GitHub API Integration
   - Automatisches Löschen alter Bilder
   - Automatisches Deployment

2. **Aktivierung über URL Parameter**
   - Besuchen Sie: `https://glanzfaktor-konzept.vercel.app/edit`

3. **Dokumentation** (`EDIT-MODE-README.md`)
   - Vollständige Anleitung
   - Troubleshooting
   - Konfiguration

## 🚀 Erste Schritte:

### 1. Environment Variables in Vercel setzen:

Siehe **VERCEL-ENV-SETUP.md** für detaillierte Anleitung!

**Kurzversion:**
1. Erstelle GitHub Token: https://github.com/settings/tokens/new (mit "repo" Berechtigung)
2. Gehe zu Vercel Dashboard → Settings → Environment Variables
3. Füge hinzu:
   - `GITHUB_TOKEN` = [Dein Token]
   - `EDIT_PASSWORD` = `glanzfaktor2026` (oder eigenes Passwort)
4. Redeploy

### 2. Edit Mode aktivieren:

```
1. Öffne: https://glanzfaktor-konzept.vercel.app/edit
2. Passwort: glanzfaktor2026 (oder dein eigenes)
3. Klicke: "Anmelden"
```

**✨ Kein Token mehr nötig - nur Passwort!**

### 3. Bilder bearbeiten:

```
1. Hover über ein Bild → wird orange
2. Klick auf Bild → Upload-Dialog öffnet sich
3. Wähle neues Bild → Vorschau erscheint
4. Klicke "Übernehmen" → Änderung vorgemerkt
5. Wiederhole für alle gewünschten Bilder
6. Klicke "💾 Speichern" oben rechts
```

### 4. Was passiert beim Speichern:

```
✅ Neue Bilder werden hochgeladen
✅ HTML wird aktualisiert
✅ Alte Bilder werden gelöscht
✅ Commit wird erstellt
✅ Vercel deployed automatisch (1-2 Min)
✅ Seite lädt automatisch neu
```

## 🔧 Passwort oder Token ändern:

Siehe **VERCEL-ENV-SETUP.md** → Abschnitt "Passwort ändern"

**Kurzversion:**
1. Vercel Dashboard → Settings → Environment Variables
2. Edit `EDIT_PASSWORD` oder `GITHUB_TOKEN`
3. Save → Redeploy

## ✨ Features:

- ✅ **Nur Passwort nötig** - kein Token-Management für Benutzer
- ✅ **Token sicher auf Server** - GitHub Token nur in Vercel Environment
- ✅ **Kein Backend nötig** - läuft über Vercel Serverless Functions
- ✅ **Keine Datenbank** - alles in Git versioniert
- ✅ **Automatisches Cleanup** - alte Bilder werden gelöscht
- ✅ **Echtzeit-Vorschau** - sehe Änderungen sofort
- ✅ **Mobile-freundlich** - funktioniert auf allen Geräten
- ✅ **Versionierung** - alle Änderungen in Git-Historie
- ✅ **Auto-Deploy** - Vercel deployed automatisch

## 🎯 Test-Workflow:

```bash
# 1. Edit Mode öffnen
https://glanzfaktor-konzept.vercel.app/edit

# 2. Anmelden (nur Passwort!)
Passwort: glanzfaktor2026

# 3. Ein Testbild ändern
- Klicke auf das Bodensee-Bild im Hero
- Lade ein neues Bild hoch
- Klicke "Übernehmen"

# 4. Speichern
- Klicke "💾 Speichern"
- Warte 1-2 Minuten
- Seite lädt neu mit neuem Bild
```

## ⚠️ Wichtige Hinweise:

1. **Environment Setup**: GitHub Token muss einmalig in Vercel gesetzt werden (siehe VERCEL-ENV-SETUP.md)
2. **Passwort-Sicherheit**: Wählen Sie ein sicheres Passwort - kann in Vercel Environment Variables geändert werden
3. **Deployment-Zeit**: Nach dem Speichern dauert es 1-2 Minuten
4. **Bildgröße**: Empfohlen unter 2MB für schnellere Uploads
5. **Internet**: Stabile Verbindung nötig während des Speicherns
6. **Token-Verwaltung**: Nur Sie als Admin müssen Token kennen, Endnutzer brauchen nur Passwort

## 🆘 Hilfe:

### Passwort wird nicht akzeptiert:
- Stelle sicher Environment Variable `EDIT_PASSWORD` ist korrekt gesetzt
- Prüfe Vercel Dashboard → Settings → Environment Variables
- Nach Änderung: Redeploy nötig

### "GitHub token not configured":
- Environment Variable `GITHUB_TOKEN` fehlt
- Siehe **VERCEL-ENV-SETUP.md** für Setup-Anleitung
- Token muss in allen 3 Environments gesetzt sein (Production, Preview, Development)

### Speichern schlägt fehl:
- Prüfe Internetverbindung
- Öffne Browser Console (F12) für Fehlerdetails
- Prüfe Vercel Function Logs im Dashboard
- Token könnte abgelaufen oder widerrufen sein

### Änderungen nicht sichtbar:
- Warte 1-2 Minuten für Deployment
- Leere Browser-Cache (Strg + F5)
- Prüfe Vercel Dashboard ob Deployment läuft

## 📚 Weitere Dokumentation:

Siehe `EDIT-MODE-README.md` für:
- Detaillierte Anleitung
- Konfigurationsoptionen
- Erweiterte Funktionen
- Troubleshooting

---

**🎊 Viel Erfolg mit dem neuen Edit Mode!**
