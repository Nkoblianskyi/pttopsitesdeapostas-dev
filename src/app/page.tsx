import { bettingSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { CompareBonusTypes } from "@/components/compare-bonus-types"
import { SportsVariety } from "@/components/sports-variety"
import { TopBettingSitesPortugal } from "@/components/top-betting-sites-portugal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative z-10 max-w-[1280px] mx-auto">
        <Hero />
        <RatingList sites={bettingSites} />
        <TopBettingSitesPortugal />
        <SportsVariety />
        <RatingMethodology />
        <CompareBonusTypes />
      </main>
      <Footer />
      <TopOffersModal sites={bettingSites} />
      <CookieBanner />
    </div>
  )
}
