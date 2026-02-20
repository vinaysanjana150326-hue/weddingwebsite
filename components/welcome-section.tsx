"use client"

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
      </div>
    </section>
  )
}