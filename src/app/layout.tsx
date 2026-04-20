import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PT Top Sites de Apostas - Melhores Casas de Apostas Desportivas",
  description:
    "Encontre os melhores sites de apostas desportivas em Portugal. Rankings independentes, bónus exclusivos e análises verificadas por especialistas para futebol, ténis, basquetebol e muito mais.",
  keywords: [
    "top sites apostas Portugal",
    "melhores casas de apostas Portugal",
    "apostas desportivas Portugal",
    "sites apostas online Portugal",
    "apostas futebol Portugal",
    "bónus apostas Portugal",
    "casas de apostas legais Portugal",
    "apostas ao vivo Portugal",
    "odds apostas desportivas",
    "apostas ténis Portugal",
    "apostas basquetebol Portugal",
    "ranking apostas Portugal",
    "pttopsitesdeapostas",
    "betting sites Portugal",
    "apostas seguras Portugal",
  ],
  authors: [{ name: "PT Top Sites de Apostas" }],
  openGraph: {
    title: "PT Top Sites de Apostas - Melhores Casas de Apostas Desportivas",
    description:
      "Rankings independentes dos melhores sites de apostas desportivas em Portugal. Bónus exclusivos e análises verificadas por especialistas.",
    url: "https://pttopsitesdeapostas.com",
    siteName: "PT Top Sites de Apostas",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="bg-background" suppressHydrationWarning>
      <body className={inter.className}>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  )
}
