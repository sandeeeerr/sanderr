# API Integratie - Portfolio Dashboard

Dit portfolio haalt nu dynamisch data op van je dev dashboard op `dev.sanderr.nl`.

## Setup

### 1. Environment Variabelen

Maak een `.env.local` file in de root van je project met de volgende inhoud:

```bash
# WakaTime API Key
WAKATIME_API_KEY=your_wakatime_api_key_here

# Portfolio API Configuration
NEXT_PUBLIC_API_URL=https://dev.sanderr.nl/api/portfolio
NEXT_PUBLIC_PORTFOLIO_API_KEY=Y3zn+FkGgPL5yk6eF0P2jzJLzQrsQ1D4gmAHg9V27Ns=
```

**🔒 Belangrijk:** De API key is **verplicht** om data op te halen van dev.sanderr.nl.

### 2. API Endpoints

De volgende endpoints worden gebruikt:

- **Projects**: `GET /api/portfolio/projects`
  - Haalt alle gepubliceerde projecten op
  - Gebruikt in: `components/projects.tsx`

- **Skills**: `GET /api/portfolio/skills`
  - Haalt alle zichtbare skills op
  - Gebruikt in: `components/skills.tsx`

### 3. Caching

Data wordt gecached voor 60 seconden via Next.js `revalidate` optie. Dit betekent:
- Snelle laadtijden
- Data blijft max 60 seconden oud
- Server-side rendering blijft werken

### 4. Icon Mapping

Skills gebruiken een icon mapping systeem (`lib/icon-map.ts`). De `icon_name` field in je database moet overeenkomen met een van deze namen:

- Alpine.js
- CLI
- Database Management
- Filament
- Git
- JavaScript
- jQuery
- Laravel
- Livewire
- Next.js
- Node.js
- PHP
- Prisma
- React
- Ruby on Rails
- Sass
- Swift
- Tailwind
- shadcn/ui
- TypeScript
- Webpack
- WordPress

Als een icon niet gevonden wordt, wordt een fallback (Terminal) icon gebruikt.

### 5. Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Fallback Behavior

Als de API niet bereikbaar is:
- Projects: Toont een lege lijst
- Skills: Toont een lege lijst

Errors worden gelogd in de console maar crashen de applicatie niet.

## Project Images

Project images moeten als volledige URL worden opgegeven in het `image_url` veld. De volgende hostnames zijn toegestaan in `next.config.js`:

- `https://images.unsplash.com/*` (voor Unsplash images)
- `https://dev.sanderr.nl/*` (voor images van je dashboard)

**Voorbeeld:**
```json
{
  "image_url": "https://dev.sanderr.nl/uploads/projects/my-project.png"
}
```

Als `image_url` `null` is, wordt geen image getoond in het project card.

### Image Opties:

1. **Upload naar dev.sanderr.nl**: Host images op je dashboard server
2. **Unsplash**: Gebruik gratis Unsplash images
3. **Andere CDN**: Voeg het hostname toe aan `next.config.js`:

```javascript
// next.config.js
images: {
  remotePatterns: [
    // ... existing patterns
    {
      protocol: "https",
      hostname: "your-cdn.com",
    },
  ],
}
```

## Structuur

```
lib/
  api.ts          # API client functies
  icon-map.ts     # Icon mapping voor skills

types/
  api.ts          # TypeScript types voor API responses

components/
  projects.tsx    # Projects component (ontvangt data via props)
  skills.tsx      # Skills component (ontvangt data via props)
  project.tsx     # Individual project component

app/
  page.tsx        # Home page (fetcht data server-side)
```

## Nieuwe Icons Toevoegen

1. Installeer het icon package (indien nodig):
   ```bash
   npm install react-icons
   ```

2. Voeg het icon toe aan `lib/icon-map.ts`:
   ```typescript
   import { SiVuedotjs } from "react-icons/si";
   
   export const iconMap: Record<string, IconType> = {
     // ... existing icons
     "Vue.js": SiVuedotjs,
   };
   ```

3. Gebruik de juiste `icon_name` in je dashboard

## Troubleshooting

### "Failed to fetch projects/skills"

1. Check of `NEXT_PUBLIC_API_URL` correct is ingesteld
2. Check of de API endpoints bereikbaar zijn:
   ```bash
   curl https://dev.sanderr.nl/api/portfolio/projects
   curl https://dev.sanderr.nl/api/portfolio/skills
   ```
3. Check CORS settings op dev.sanderr.nl

### Icons worden niet getoond

1. Check of de `icon_name` in je database overeenkomt met een naam in `icon-map.ts`
2. Check de browser console voor warnings

### Data wordt niet geupdate

1. Wacht 60 seconden (revalidatie periode)
2. Force refresh met `Cmd/Ctrl + Shift + R`
3. Clear `.next` cache: `rm -rf .next && npm run dev`

## Links

- **Dev Dashboard**: https://dev.sanderr.nl
- **API Docs**: Zie `API_DOCUMENTATION.md` in je dashboard project
- **Portfolio**: https://sanderr.nl

