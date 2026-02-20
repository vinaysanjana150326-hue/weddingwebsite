"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/event", label: "The Event" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo / Monogram */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-[var(--font-great-vibes)] text-3xl transition-colors duration-300",
              isScrolled ? "text-gold" : "text-primary-foreground"
            )}
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            {"E & J"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold",
                  pathname === link.href
                    ? "text-gold"
                    : isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 md:hidden",
          isMobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-ivory/98 backdrop-blur-md px-6 pb-6 pt-2">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold",
                    pathname === link.href
                      ? "text-gold"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
