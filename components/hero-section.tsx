"use client"

import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/weddingwebsite/images/vinaysanju.jpeg"
        alt="Vinay and Sanjana in a beautiful engagement setting"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-brown/50 via-warm-brown/30 to-warm-brown/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        
        {/* Pre-heading */}
        <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
          Together with their families
        </p>

        {/* Names */}
        <h1
          className="animate-fade-in-up mt-6 text-6xl leading-tight text-primary-foreground md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "var(--font-great-vibes)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          Vinay & Sanjana
        </h1>

        {/* Decorative line */}
        <div
          className="animate-fade-in mt-6 flex items-center gap-4"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <div className="h-px w-12 bg-gold/60 md:w-20" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
            Are Getting Married
          </span>
          <div className="h-px w-12 bg-gold/60 md:w-20" />
        </div>

        {/* Date */}
        <p
          className="animate-fade-in mt-6 text-lg font-light tracking-[0.15em] text-primary-foreground md:text-xl"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          March 15, 2026
        </p>

        {/* Countdown */}
        <div
          className="animate-fade-in mt-10"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <CountdownTimer />
        </div>

        {/* CTA - Scroll to Details */}
        {/* <Link
          href="#details"
          className="animate-fade-in mt-12 inline-flex items-center gap-2 border border-gold/50 bg-gold/20 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-gold/40 hover:border-gold"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          View Details
        </Link> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}