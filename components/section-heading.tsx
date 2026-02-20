"use client"

import { useRef, useEffect, useState } from "react"
import { FloralDivider } from "@/components/floral-divider"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      <FloralDivider className="mb-6" />
      <h2
        className="text-5xl text-gold md:text-6xl"
        style={{ fontFamily: "var(--font-great-vibes)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg font-light tracking-wide text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
