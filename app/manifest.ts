import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sander de Vries - Full Stack Developer',
    short_name: 'Sander',
    description: 'Portfolio of Sander de Vries - Junior Full Stack Developer specializing in Next.js and modern web development',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}