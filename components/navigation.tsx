"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-6">
        <Link href="#home">
          <span
            className={cn(
              "font-[var(--font-great-vibes)] text-3xl transition-colors duration-300",
              isScrolled ? "text-gold" : "text-primary-foreground"
            )}
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            V & S
          </span>
        </Link>
      </nav>
    </header>
  )
}