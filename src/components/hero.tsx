"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import Image from "next/image"
import { ShieldCheck, TrendingUp, Star } from "lucide-react"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-14 md:pt-16">
      {/* Background image */}
      <div className="relative h-52 md:h-72 lg:h-96 w-full overflow-hidden">
        <Image
          src="/porto-stadium-light.jpg"
          alt="Estádio de futebol do Porto"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[hsl(var(--porto-blue))]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">
            Melhores Sites de Apostas em Portugal
          </h1>
          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto mb-4">
            Rankings verificados por especialistas. Comparamos as melhores casas de apostas licenciadas em Portugal.
          </p>
          <div className="flex flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1.5 text-white">
              <Image src="/flag.png" alt="Bandeira Portugal" width={16} height={16} className="w-4 h-4" />
              <span className="text-xs md:text-sm font-semibold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Image src="/srij.svg" alt="SRIJ" width={24} height={24} className="w-4 h-4" />
              <span className="text-xs md:text-sm font-semibold">Licença</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
              <span className="text-xs md:text-sm font-semibold">Bónus Elevados</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
              <span className="text-xs md:text-sm font-semibold">Odds Competitivas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-[hsl(var(--porto-blue))] text-white">
        <div className="max-w-[1280px] mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs">
          <span className="font-medium">
            Atualizado em {new Date().toLocaleDateString("pt-PT", { month: "long", year: "numeric" })}
          </span>
          <span>
            Jogo responsável +18 |{" "}
            <button
              onClick={() => setIsModalOpen(true)}
              className="underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              Informação Publicitária
            </button>
          </span>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
