import type { ReactNode } from "react"
import { FadeIn } from "./animations/fade-in"

interface PolicySectionProps {
  title: string
  children: ReactNode
  delay?: number
}

export function PolicySection({ title, children, delay = 0 }: PolicySectionProps) {
  return (
    <FadeIn delay={delay} className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[hsl(var(--porto-blue))] border-b border-border pb-2">{title}</h2>
      <div className="space-y-4">{children}</div>
    </FadeIn>
  )
}

interface PolicyParagraphProps {
  children: ReactNode
}

export function PolicyParagraph({ children }: PolicyParagraphProps) {
  return <p className="text-sm md:text-base leading-relaxed">{children}</p>
}

interface PolicyListProps {
  items: string[]
  type?: "bullet" | "number"
}

export function PolicyList({ items, type = "bullet" }: PolicyListProps) {
  const ListComponent = type === "bullet" ? "ul" : "ol"
  const listClass = type === "bullet" ? "list-disc" : "list-decimal"

  return (
    <ListComponent className={`${listClass} pl-5 space-y-2 text-sm md:text-base`}>
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ListComponent>
  )
}

interface PolicyLinkProps {
  href: string
  children: ReactNode
  target?: string
  rel?: string
}

export function PolicyLink({ href, children, target, rel }: PolicyLinkProps) {
  return (
    <a
      href={href}
      className="text-[hsl(var(--porto-blue))] hover:opacity-80 underline transition-colors"
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
