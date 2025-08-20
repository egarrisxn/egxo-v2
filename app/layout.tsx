import './styles/global.css'
import type {Viewport, Metadata} from 'next'
import {ReactNode} from 'react'
import {Space_Grotesk, Roboto_Mono} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import {Analytics} from '@vercel/analytics/react'
import styles from './layout.module.css'

export const dynamic = 'force-static'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space_grotesk',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://egxo-v2.vercel.app'),
  title: {
    template: '%s | EGXO v2',
    default: 'EGXO v2',
  },
  description: 'Version 2 of my personal portfolio/website/whatever.',
  applicationName: 'EGXO v2',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EGXO v2',
    description: 'Version 2 of my personal portfolio/website/whatever.',
    url: 'https://egxo-v2.vercel.app',
    siteName: 'egxo-v2.vercel.app',
    images: [
      {
        url: `https://egxo-v2.vercel.app/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Version 2 of my personal portfolio/website/whatever.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EGXO v2',
    description: 'Version 2 of my personal portfolio/website/whatever.',
    creator: '@eg__xo',
    site: '@eg__xo',
    images: [
      {
        url: `https://egxo-v2.vercel.app/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Version 2 of my personal portfolio/website/whatever.',
      },
    ],
  },
  icons: {
    icon: {
      url: '/icons/icon.png',
      sizes: '192x192',
      type: 'image/png',
    },
    apple: {
      url: '/icons/apple-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: {
      rel: 'icon',
      url: '/icons/icon.svg',
      type: 'image/svg+xml',
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#152028'},
    {media: '(prefers-color-scheme: dark)', color: '#fcf5ff'},
  ],
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${space_grotesk.variable} ${roboto_mono.variable}`}
    >
      <head>
        <meta name='apple-mobile-web-app-title' content='EGXO v2' />
      </head>
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
