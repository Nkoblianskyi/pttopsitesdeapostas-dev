import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--porto-blue))] text-white mt-8">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Main footer content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/15">
          <div>
            <div className="mb-5 flex flex-col items-start leading-tight select-none">
              <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[hsl(var(--pt-green-light))]">
                Portugal
              </span>
              <span className="text-base font-extrabold tracking-[0.15em] uppercase text-white">
                Top Sites de Apostas
              </span>
              <div className="flex gap-1 mt-1">
                <span className="h-[2px] w-8 bg-[hsl(var(--pt-green-light))]" />
                <span className="h-[2px] w-4 bg-[hsl(var(--porto-red))]" />
                <span className="h-[2px] w-8 bg-[hsl(var(--pt-green-light))]" />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              pttopsitesdeapostas.com fornece comparações independentes de plataformas de apostas desportivas licenciadas
              em Portugal. Podemos receber comissões de marcas em destaque, o que pode influenciar a ordem de
              classificação.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Rankings de Apostas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/80 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Jogo Responsável</h3>
            <p className="text-white/70 text-xs leading-relaxed mb-4">
              Apoiamos organizações dedicadas ao jogo responsável. As apostas devem ser uma forma de entretenimento e
              nunca um meio de rendimento.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="https://www.srij.turismodeportugal.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 flex flex-col items-center"
              >
                <div className="relative w-14 h-7 mb-1">
                  <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
                </div>
                
              </Link>
              <Link
                href="https://www.icad.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 flex flex-col items-center"
              >
                <div className="relative w-14 h-7 mb-1">
                  <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
                </div>
                
              </Link>
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 flex flex-col items-center"
              >
                <div className="relative w-14 h-7 mb-1">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
                
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 flex flex-col items-center"
              >
                <div className="relative w-14 h-7 mb-1">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
                
              </Link>
              <Link
                href="https://www.jogoresponsavel.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 flex flex-col items-center"
              >
                <div className="relative w-14 h-7 mb-1">
                  <Image src="/jogo-responsavel-new.png" alt="Jogo Responsável" fill className="object-contain" />
                </div>
                
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} pttopsitesdeapostas.com. Todos os direitos reservados.</p>
          <p>Jogue com responsabilidade. Apenas maiores de 18 anos.</p>
        </div>
      </div>
    </footer>
  )
}
