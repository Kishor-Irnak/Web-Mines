import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Webmines — Websites That Turn Visitors Into Customers",
  description:
    "Webmines creates high-converting landing pages for SaaS, clinics, salons, real estate businesses, and startups. Fast, modern, and SEO-optimised websites that drive leads and sales.",
  keywords: [
    "web design",
    "landing pages",
    "SaaS website",
    "clinic website",
    "real estate website",
    "high-converting websites",
    "Next.js agency",
    "web development",
  ],
  authors: [{ name: "Webmines" }],
  creator: "Webmines",
  metadataBase: new URL("https://webmines.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webmines.in",
    siteName: "Webmines",
    title: "Webmines — Websites That Turn Visitors Into Customers",
    description:
      "High-converting landing pages for SaaS, clinics, salons, real estate businesses, and startups that want more leads and sales.",
    images: [
      {
        url: "/cta.jpg",
        width: 1200,
        height: 630,
        alt: "Webmines — High-Converting Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webmines — Websites That Turn Visitors Into Customers",
    description:
      "High-converting landing pages for SaaS, clinics, salons, real estate, and startups.",
    images: ["/cta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", plusJakartaSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
