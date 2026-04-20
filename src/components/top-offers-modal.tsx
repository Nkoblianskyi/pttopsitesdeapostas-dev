"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < stars ? "fill-amber-400 text-amber-400" : "text-border fill-border"}`}
      />
    ))
  }

  const topSite = sites[0]
  if (!topSite || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-[380px] bg-white border border-border shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-widest">
            Melhor Oferta da Semana
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Top badge */}
        <div className="bg-[hsl(var(--porto-blue))] text-white text-center py-1.5">
          <span className="text-xs font-bold uppercase tracking-widest">#1 Recomendado</span>
        </div>

        {/* Logo */}
        <div className="bg-[hsl(var(--muted))] flex items-center justify-center p-6 border-b border-border">
          <div className="relative h-16 w-48">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={topSite.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 py-3 border-b border-border">
          <div className="flex gap-0.5">{renderStars(topSite.stars)}</div>
          <span className="font-bold text-foreground">{topSite.rating.toFixed(1)}</span>
          <span className="text-muted-foreground text-sm">({topSite.reviews} avaliações)</span>
        </div>

        {/* Bonus */}
        <div className="px-5 py-4 text-center border-b border-border">
          <p className="text-xs text-muted-foreground uppercase font-semibold tracking-widest mb-1">
            Bónus Exclusivo
          </p>
          <p className="text-xl font-bold text-foreground leading-tight">{topSite.bonus}</p>
        </div>

        {/* CTA */}
        <div className="px-5 py-4 text-center">
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener referrer"
            className="block w-full px-6 py-3 bg-[hsl(var(--pt-green))] hover:bg-[hsl(var(--pt-green-dark))] text-white text-sm font-bold uppercase tracking-wide text-center transition-colors mb-3 border-2 border-[hsl(var(--pt-green-dark))]"
            onClick={() => setIsOpen(false)}
          >
            Obter Bónus Agora
          </a>
          <p className="text-xs text-[hsl(var(--porto-red))] font-medium">
            +18 | T&Cs Aplicam-se | Jogue com Responsabilidade
          </p>
        </div>
      </div>
    </div>
  )
}
