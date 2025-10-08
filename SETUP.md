# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Create `.env.local`

Maak een `.env.local` bestand in de root van dit project:

```bash
# WakaTime API Key (voor coding stats)
WAKATIME_API_KEY=your_wakatime_api_key_here

# 🔥 Portfolio API (REQUIRED - voor dynamic content van dev.sanderr.nl)
NEXT_PUBLIC_API_URL=https://dev.sanderr.nl/api/portfolio
NEXT_PUBLIC_PORTFOLIO_API_KEY=Y3zn+FkGgPL5yk6eF0P2jzJLzQrsQ1D4gmAHg9V27Ns=
```

## Step 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ✅ Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with all variables
- [ ] **API key configured** (NEXT_PUBLIC_PORTFOLIO_API_KEY)
- [ ] **WakaTime key configured** (WAKATIME_API_KEY)
- [ ] Development server running

---

## 🧪 Test de API Connection

```bash
# Test of de API key werkt
curl https://dev.sanderr.nl/api/portfolio/projects \
  -H "x-api-key: Y3zn+FkGgPL5yk6eF0P2jzJLzQrsQ1D4gmAHg9V27Ns="
```

Als je JSON data ziet met projects, werkt het! ✅

---

## 🚨 Troubleshooting

### "Failed to fetch projects/skills"

**Probleem:** API key ontbreekt of is incorrect.

**Oplossing:**
1. Check of `NEXT_PUBLIC_PORTFOLIO_API_KEY` in `.env.local` staat
2. Restart de dev server (Ctrl+C en `npm run dev`)
3. Check browser console voor specifieke errors

### "Image failed to load"

**Probleem:** Image URL is null of hostname niet toegestaan.

**Oplossing:**
- Images zijn optioneel - projects zonder images worden gewoon getoond
- Upload images in je dashboard op dev.sanderr.nl
- Hostname `dev.sanderr.nl` is al geconfigureerd in `next.config.js`

### "No projects/skills showing"

**Probleem:** API geeft lege array terug.

**Oplossing:**
1. Ga naar dev.sanderr.nl dashboard
2. Check of projecten `is_published = true` hebben
3. Check of skills `visible = true` hebben

---

## 📚 Meer Documentatie

- **[API_INTEGRATION.md](./API_INTEGRATION.md)** - Volledige API documentatie
- **[README.md](./README.md)** - Project overview en features

---

## 🔐 Security Note

**BELANGRIJK:** Commit je `.env.local` file **NOOIT** naar Git!

Het `.gitignore` bestand zorgt hier al voor, maar check altijd dubbel voordat je commit.

---

## 🚀 Deploy naar Vercel

1. Push je code naar GitHub
2. Connect repo op Vercel
3. Voeg Environment Variables toe in Vercel Dashboard:
   - `WAKATIME_API_KEY`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_PORTFOLIO_API_KEY`
   - `DATABASE_URL`
4. Deploy! 🎉

Je portfolio haalt nu automatisch data op van dev.sanderr.nl!

