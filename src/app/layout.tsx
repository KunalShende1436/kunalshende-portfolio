import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = "Kunal M Shende | Software Developer & IoT Developer"

const description =
  'Kunal M Shende — Software Developer & IoT Developer. I build end-to-end solutions connecting custom hardware devices seamlessly with full-stack web platforms and cybersecurity frameworks.'
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://kunalshende1436.github.io'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Kunal M Shende',
    'Kunal Shende',
    'Software Developer',
    'IoT Developer',
    'Cybersecurity Researcher',
    'Embedded Systems Engineer',
    'ESP32',
    'ZeroTrace',
    'Sentinel HID',
    'Web Serial',
    'Nagpur Developer'
  ],
  category: 'technology',
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Kunal M Shende Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header className="sticky top-0 z-50">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Kunal M Shende",
                "jobTitle": "Software Developer & IoT Developer",
                "url": "https://github.com/KunalShende1436",
                "sameAs": [
                  "https://github.com/KunalShende1436",
                  "https://www.linkedin.com/in/kunal-shende04/"
                ]
              })
            }}
          />
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
