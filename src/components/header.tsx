import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white border-b border-border fixed top-0 left-0 right-0 z-50">
      {/* Porto-style top stripe: green | red | green */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-[hsl(var(--pt-green))]" />
        <div className="w-16 bg-[hsl(var(--porto-red))]" />
        <div className="flex-1 bg-[hsl(var(--pt-green))]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="relative flex items-center h-14 md:h-16">

          {/* Center: site name — absolutely centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight select-none pointer-events-none">
            <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase text-[hsl(var(--pt-green))]">
              Portugal
            </span>
            <span className="text-sm md:text-base font-extrabold tracking-[0.18em] uppercase text-[hsl(var(--porto-blue))]">
              Top Sites de Apostas
            </span>
            <div className="flex gap-1 mt-1">
              <span className="h-[2px] w-10 bg-[hsl(var(--pt-green))]" />
              <span className="h-[2px] w-5 bg-[hsl(var(--porto-red))]" />
              <span className="h-[2px] w-10 bg-[hsl(var(--pt-green))]" />
            </div>
          </div>

          {/* Right: 18+ and SRIJ badges */}
          <div className="ml-auto flex items-center gap-2 z-10">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[hsl(var(--porto-blue))] text-white font-extrabold text-sm leading-none border-2 border-[hsl(var(--pt-green))]">
              18+
            </div>
            <Image src="/srij.svg" alt="SRIJ" width={32} height={32} />
          </div>

        </div>
      </div>
    </header>
  )
}
