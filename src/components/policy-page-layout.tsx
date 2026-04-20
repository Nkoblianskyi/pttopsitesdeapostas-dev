import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FadeIn } from "./animations/fade-in"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
}

export function PolicyPageLayout({
  children,
  title,
  lastUpdated,
}: PolicyPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-14 md:pt-16">
        {/* Hero bar */}
        <div className="bg-[hsl(var(--porto-blue))] text-white">
          <div className="container mx-auto px-4 max-w-[1280px] py-8 md:py-12">
            <FadeIn>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">{title}</h1>
              {lastUpdated && (
                <p className="text-sm text-white/70 text-center mt-2">Última atualização: {lastUpdated}</p>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto bg-white border border-border shadow-sm p-6 md:p-8 lg:p-10 text-foreground">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
