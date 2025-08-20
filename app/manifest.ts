import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'egxo-v2',
    short_name: 'egxo-v2',
    description: 'Version 2 of my personal portfolio/website/whatever.',
    id: '/',
    start_url: '/',
    background_color: '#fcf5ff',
    theme_color: '#fcf5ff',
    orientation: 'any',
    display: 'standalone',
    icons: [
      {
        src: '/favicon/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/mobile.png',
        sizes: '750x1334',
        type: 'image/png',
      },
    ],
  }
}
