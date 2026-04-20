"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface PulseProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function Pulse({ children, className, duration = 2000, delay = 0 }: PulseProps) {
  return (
    <div
      className={cn("animate-pulse", className)}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
