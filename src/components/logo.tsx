import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize =
    size === "sm"
      ? "text-base md:text-lg"
      : size === "lg"
        ? "text-xl md:text-2xl"
        : "text-lg md:text-xl"

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <div
        className="flex flex-row items-center gap-0 leading-none px-3 py-1.5"
        style={{
          background: `
            repeating-conic-gradient(#000 0% 25%, #1a1a1a 0% 50%)
            0 0 / 10px 10px
          `,
        }}
      >
        <span className={`${textSize} font-bold text-white tracking-tight`}>PT</span>
        <span className={`${textSize} font-bold text-[hsl(var(--porto-red))] tracking-tight`}>Top</span>
        <span className={`${textSize} font-bold text-white tracking-tight ml-1.5`}>
          Sites de Apostas
        </span>
      </div>
    </Link>
  )
}
