# Sander's Portfolio Website 🚀

Modern portfolio website built with Next.js 13, React, TypeScript, and Tailwind CSS. Featuring dynamic content management through a custom dashboard API.

## ✨ Features

- **Dynamic Content**: Projects and skills are fetched from a custom API dashboard
- **WakaTime Integration**: Real-time coding statistics
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **Responsive Design**: Optimized for all screen sizes
- **Server-Side Rendering**: Fast initial page loads with Next.js 13
- **Image Optimization**: Next.js Image component with Supabase storage

## 🛠 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content Management**: Dynamic API from dev.sanderr.nl
- **API Client**: SWR for data fetching
- **Email**: React Email + Resend
- **Icons**: React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x
- npm or yarn
- PostgreSQL database (for blog functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sanderr
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
# WakaTime API Key
WAKATIME_API_KEY=your_wakatime_api_key_here

# Portfolio API Configuration (required for dynamic content)
NEXT_PUBLIC_API_URL=https://dev.sanderr.nl/api/portfolio
NEXT_PUBLIC_PORTFOLIO_API_KEY=Y3zn+FkGgPL5yk6eF0P2jzJLzQrsQ1D4gmAHg9V27Ns=
```

4. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
sanderr/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── ...
├── lib/                   # Utility functions
│   ├── api.ts            # API client
│   ├── icon-map.ts       # Icon mapping for skills
│   ├── data.ts           # Static data (fallback)
│   └── ...
├── types/                 # TypeScript type definitions
│   └── api.ts            # API response types
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🔌 API Integration

This portfolio fetches dynamic content from a custom dashboard API at `dev.sanderr.nl`.

### Available Endpoints

- `GET /api/portfolio/projects` - Fetch all published projects
- `GET /api/portfolio/skills` - Fetch all visible skills
- `GET /api/portfolio/about` - Fetch about information
- `GET /api/portfolio/experience` - Fetch work experience
- `GET /api/portfolio/blog` - Fetch blog posts

For detailed API documentation, see [API_INTEGRATION.md](./API_INTEGRATION.md).

## 📝 Content Management

Content is managed through a separate dashboard application at `dev.sanderr.nl`. Changes made in the dashboard are automatically reflected on the portfolio website within 60 seconds (cache revalidation period).

### Managing Content

1. Go to [dev.sanderr.nl](https://dev.sanderr.nl)
2. Log in with your admin credentials
3. Add/edit/delete projects, skills, etc.
4. Changes will be live within 60 seconds

## 🎨 Adding New Skill Icons

To add a new skill icon:

1. Open `lib/icon-map.ts`
2. Import the icon from `react-icons`:
```typescript
import { SiVuedotjs } from "react-icons/si";
```

3. Add it to the `iconMap` object:
```typescript
export const iconMap: Record<string, IconType> = {
  // ... existing icons
  "Vue.js": SiVuedotjs,
};
```

4. Use "Vue.js" as the `icon_name` in your dashboard

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

The `vercel-build` script will automatically run migrations.

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📄 License

Private project - All rights reserved

## 👤 Author

**Sander**
- Website: [sanderr.nl](https://sanderr.nl)
- Dashboard: [dev.sanderr.nl](https://dev.sanderr.nl)

## 🙏 Acknowledgments

- WakaTime for coding statistics
- React Icons for the icon library
- Framer Motion for smooth animations

