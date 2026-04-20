"use client"

import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[hsl(var(--porto-blue))] shadow-lg z-50">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground mb-0.5">
            Este site utiliza cookies
          </p>
          <p className="text-xs text-muted-foreground">
            Utilizamos cookies para melhorar a sua experiência de navegação e analisar o tráfego do site. Ao continuar,
            aceita a nossa{" "}
            <a href="/cookie-policy" className="text-[hsl(var(--porto-blue))] underline underline-offset-2 hover:opacity-80">
              Política de Cookies
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-semibold border border-border text-foreground hover:bg-muted transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-semibold bg-[hsl(var(--porto-blue))] text-white hover:bg-[hsl(var(--porto-blue-dark))] transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
