import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 text-border fill-border" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-border fill-border" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
          </div>,
        )
      }
    }
    return starElements
  }

  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-3 md:px-4 max-w-[1280px]">
        <div className="grid gap-3">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 3 && site.badges.length > 0

            return (
              <div
                key={site.id}
                className={`relative bg-white border overflow-hidden ${
                  isFirstPlace
                    ? "border-[hsl(var(--pt-green))] border-2 shadow-md"
                    : "border-border shadow-sm"
                }`}
              >
                {showBadge && (
                  <span
                    className={`absolute top-0 left-0 z-10 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider ${
                      isFirstPlace
                        ? "bg-[hsl(var(--porto-blue))]"
                        : "bg-[hsl(var(--porto-red))]"
                    }`}
                  >
                    {site.badges[0]}
                  </span>
                )}

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <Link href={site.url} target="_blank" rel="noopener referrer">
                    <div className="grid grid-cols-[260px_1fr_200px_180px] items-center gap-0">
                      {/* Logo */}
                      <div className="flex items-center justify-center bg-black p-6 h-[120px] border-r border-border">
                        <div className="relative h-16 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="flex flex-col items-center justify-center text-center px-6 py-4">
                        <p className="text-[hsl(var(--muted-foreground))] text-xs font-semibold mb-1 uppercase tracking-widest">
                          Bónus de Boas-Vindas
                        </p>
                        <h3 className="text-foreground text-xl font-bold leading-tight">{site.bonus}</h3>
                      </div>

                      {/* Score */}
                      <div className="flex flex-col items-center justify-center text-center px-6 py-4 border-l border-border">
                        <p className="text-[hsl(var(--muted-foreground))] text-xs font-semibold mb-1 uppercase tracking-widest">
                          Pontuação
                        </p>
                        <div className="text-[hsl(var(--porto-blue))] text-4xl font-bold mb-1">
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-0.5 mb-1">
                          {renderStars(site.rating)}
                        </div>
                        <p className="text-[hsl(var(--muted-foreground))] text-xs">
                          ({site.reviews.toLocaleString()} avaliações)
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col items-center justify-center gap-2 px-6 py-4 border-l border-border">
                        <p className="w-full bg-[hsl(var(--pt-green))] hover:bg-[hsl(var(--pt-green-dark))] text-white font-bold py-3 px-6 text-center text-sm uppercase tracking-wide transition-colors border-2 border-[hsl(var(--pt-green-dark))]">
                          Registar
                        </p>
                        <p className="text-[hsl(var(--porto-blue-light))] font-medium text-xs">
                          Visitar Site
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Terms */}
                  <div className="border-t border-border px-6 py-2 bg-[hsl(var(--muted))]">
                    <p className="text-[hsl(var(--muted-foreground))] text-[11px] leading-relaxed text-center">
                      {site.terms}
                    </p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <Link href={site.url} target="_blank" rel="noopener referrer">
                    <div className="grid grid-cols-2 gap-3 items-center mb-3">
                      <div className="bg-black p-4 border border-border">
                        <div className="relative h-16 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase font-bold mb-1 tracking-widest">
                          Bónus
                        </div>
                        <div className="text-lg font-bold text-foreground leading-tight">{site.bonus}</div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-3">
                      <div className="grid grid-cols-3 items-center gap-2">
                        <div className="text-center">
                          <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                          <div className="text-[10px] text-[hsl(var(--muted-foreground))] font-bold">
                            ({site.reviews})
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--porto-blue))] leading-none mb-1">
                            {site.rating.toFixed(1)}
                          </div>
                          <div className="text-[10px] text-[hsl(var(--muted-foreground))] font-bold uppercase tracking-widest">
                            Score
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <p className="w-full bg-[hsl(var(--pt-green))] hover:bg-[hsl(var(--pt-green-dark))] text-white font-bold py-3 px-3 text-center text-xs uppercase border-2 border-[hsl(var(--pt-green-dark))]">
                            Registar
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="border-t border-border pt-2 mt-3">
                    <p className="text-[hsl(var(--muted-foreground))] text-[10px] leading-relaxed text-center">
                      {site.terms}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
