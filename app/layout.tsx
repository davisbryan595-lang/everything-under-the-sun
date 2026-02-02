import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Preloader } from "@/components/preloader"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Everything Under the Sun Boutique | Luxury Women's Fashion",
  description:
    "Discover luxury women's fashion at Everything Under the Sun Boutique in Hazel Crest, IL. Premium dresses, shoes, purses & accessories.",
  generator: "v0.app",
  openGraph: {
    title: "Everything Under the Sun Boutique",
    description: "Luxury women's fashion boutique in Hazel Crest, IL",
    url: "https://everythingunderthesun.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Everything Under the Sun Boutique",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-sans antialiased bg-cream text-black`}>
        <script
          key="no-dark-mode"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark')
              } catch (e) {}
            `,
          }}
        />
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
