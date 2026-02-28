# ⚙️ Vercel Environment Variables Setup

## 🎯 Was Sie brauchen:

1. **GitHub Personal Access Token** (einmalig erstellen)
2. **Passwort** (Ihr Wunschpasswort für Edit Mode)

---

## 📝 Schritt 1: GitHub Token erstellen

1. Gehen Sie zu: [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)
2. **Note**: "GlanzFaktor Edit Mode Server"
3. **Expiration**: "No expiration" (oder Ihr gewünschtes Ablaufdatum)
4. **Select scopes**: Wählen Sie **repo** (alle Checkboxen darunter)
   - ✅ repo:status
   - ✅ repo_deployment
   - ✅ public_repo
   - ✅ repo:invite
   - ✅ security_events
5. Klicken Sie auf **"Generate token"**
6. **WICHTIG**: Kopieren Sie das Token SOFORT - es wird nur einmal angezeigt!

---

## 🚀 Schritt 2: Environment Variables in Vercel setzen

### Option A: Via Vercel Dashboard (empfohlen)

1. Gehen Sie zu [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Wählen Sie Ihr Projekt: **glanzfaktor-konzept**
3. Gehen Sie zu **Settings** → **Environment Variables**
4. Fügen Sie folgende Variablen hinzu:

#### Variable 1: GITHUB_TOKEN
- **Key**: `GITHUB_TOKEN`
- **Value**: [Ihr kopiertes GitHub Token einfügen]
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 2: EDIT_PASSWORD
- **Key**: `EDIT_PASSWORD`
- **Value**: `glanzfaktor2026` (oder Ihr eigenes Passwort)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

5. Klicken Sie auf **Save** für jede Variable
6. Klicken Sie auf **Redeploy** um die Änderungen zu aktivieren

### Option B: Via Vercel CLI

```bash
# Vercel CLI installieren (falls nicht vorhanden)
npm i -g vercel

# In Projekt-Verzeichnis gehen
cd C:\Users\MoA\Desktop\Reinigung

# Environment Variables setzen
vercel env add GITHUB_TOKEN production
# Token hier einfügen wenn gefragt

vercel env add EDIT_PASSWORD production  
# Passwort hier eingeben

# Für Preview & Development wiederholen
vercel env add GITHUB_TOKEN preview
vercel env add GITHUB_TOKEN development
vercel env add EDIT_PASSWORD preview
vercel env add EDIT_PASSWORD development

# Neu deployen
vercel --prod
```

---

## ✅ Schritt 3: Testen

1. Warten Sie bis Vercel fertig deployed hat (1-2 Minuten)
2. Öffnen Sie: `https://glanzfaktor-konzept.vercel.app/edit`
3. Geben Sie NUR das Passwort ein (kein Token mehr nötig!)
4. Klicken Sie "Anmelden"
5. ✨ Edit Mode sollte jetzt aktiviert sein!

---

## 🔒 Sicherheit

### ✅ Was ist sicher:
- GitHub Token ist **nur auf dem Server**, nie im Browser
- Token wird nie im Client-Code sichtbar
- Passwort wird nur für API-Aufrufe verwendet
- Alle API-Aufrufe gehen durch Ihren sicheren Proxy

### ⚠️ Wichtig:
- **Teilen Sie niemals Ihr GitHub Token**
- Setzen Sie ein **starkes Passwort**
- Token kann jederzeit auf GitHub widerrufen werden
- Bei Sicherheitsbedenken: Token neu erstellen

---

## 🔄 Passwort ändern

Sie haben zwei Möglichkeiten:

### Option 1: Vercel Dashboard
1. Gehe zu Settings → Environment Variables
2. Finde `EDIT_PASSWORD`
3. Klicke "Edit"
4. Neues Passwort eingeben
5. Save → Redeploy

### Option 2: Via CLI
```bash
vercel env rm EDIT_PASSWORD production
vercel env add EDIT_PASSWORD production
# Neues Passwort eingeben
vercel --prod
```

---

## 🆘 Troubleshooting

### "GitHub token not configured"
- Environment Variable `GITHUB_TOKEN` fehlt oder ist falsch
- Prüfen Sie Vercel Dashboard → Settings → Environment Variables
- Stellen Sie sicher dass alle 3 Environments gesetzt sind

### "Invalid password"
- `EDIT_PASSWORD` stimmt nicht mit eingegebenem Passwort überein
- Standard-Passwort ist `glanzfaktor2026`
- Prüfen Sie die Environment Variable in Vercel

### Token läuft ab
- Erstellen Sie ein neues Token auf GitHub
- Aktualisieren Sie `GITHUB_TOKEN` in Vercel
- Redeploy

### API Fehler
- Prüfen Sie Browser Console (F12)
- Prüfen Sie Vercel Function Logs: [Dashboard → Logs]
- Token könnte widerrufen sein

---

## 📋 Checkliste

- [ ] GitHub Token erstellt
- [ ] `GITHUB_TOKEN` in Vercel gesetzt (Production, Preview, Development)
- [ ] `EDIT_PASSWORD` in Vercel gesetzt (Production, Preview, Development)
- [ ] Vercel neu deployed
- [ ] Edit Mode getestet mit `/edit`
- [ ] Erfolgreich mit Passwort angemeldet
- [ ] Testbild geändert und gespeichert

---

## 🎉 Fertig!

Jetzt können Sie Bilder bearbeiten **ohne Token eingeben zu müssen**!

Öffnen Sie einfach:
```
https://glanzfaktor-konzept.vercel.app/edit
```

Geben Sie Ihr Passwort ein und los geht's! 🚀
