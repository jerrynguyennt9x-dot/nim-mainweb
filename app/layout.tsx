import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tamnt.art/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Tâm Túc Tắc - 3D Artist review',
    template: '%s | Tâm Túc Tắc',
  },
  description:
    'Portfolio cá nhân của Tâm Túc Tắc - một 3D artist với đam mê tạo hình nhân vật và môi trường 3D.',
  openGraph: {
    title: 'Tâm Túc Tắc - 3D Artist review',
    description:
      'Portfolio cá nhân của Tâm Túc Tắc - một 3D artist với đam mê tạo hình nhân vật và môi trường 3D.',
    url: 'https://www.tamnt.art/',
    siteName: 'Tâm Túc Tắc',
    images: [
      {
        url: '/studio.jpg', // Đặt ảnh trong thư mục /public
        width: 1200,
        height: 630,
        alt: 'Tâm Túc Tắc - 3D Artist review',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
