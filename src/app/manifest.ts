import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Les Mailles de Sylvie - Tricot Artisanal',
    short_name: 'Mailles Sylvie',
    description: 'Créations tricot artisanales faites main avec passion. Pulls, écharpes, couvertures sur-mesure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e293b',
    theme_color: '#f8a5c2',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'fr',
    categories: ['lifestyle', 'shopping', 'business'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow'
      },
      {
        src: '/screenshot-desktop.png', 
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  }
}