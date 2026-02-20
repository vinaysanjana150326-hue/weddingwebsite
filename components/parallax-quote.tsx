"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ParallaxQuote() {
  return (
    <section
      className="parallax-section relative flex min-h-[50vh] items-center justify-center"
      style={{
        backgroundImage: "url('/images/quote.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-warm-brown/60" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <AnimateOnScroll>
          <p
            className="text-3xl leading-relaxed text-primary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            {'"Whatever our souls are made of, his and mine are the same."'}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
