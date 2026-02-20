"use client"

import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function WelcomeSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          title="Welcome"
          subtitle="We joyfully invite you to share in our celebration"
        />

        <AnimateOnScroll delay={200}>
          <p className="mt-10 text-lg font-light leading-relaxed text-foreground/80">
            With hearts full of love and joy, we invite you to celebrate our
            union as we begin a new chapter together. Your presence and blessings
            mean the world to us, and we would be honored to share this
            unforgettable day with you.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/our-story"
              className="inline-flex items-center border border-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Our Story
            </Link>
            <Link
              href="/event"
              className="inline-flex items-center bg-accent px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              RSVP Now
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
