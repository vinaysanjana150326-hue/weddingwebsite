"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Clock, MapPin } from "lucide-react"

const details = [
  {
    icon: Clock,
    title: "Ceremony",
    lines: ["Saturday, March 15, 2026", "9:00 AM"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["Sudha Veerendra Samudhaya Bhavan", "Davangere, Karnataka"],
  },
]

export function EventDetails() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2">
        {details.map((detail, index) => (
          <AnimateOnScroll key={detail.title} delay={index * 150}>
            <div className="group flex flex-col items-center rounded-md border border-border bg-card p-10 text-center transition-all duration-500 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <detail.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                {detail.title}
              </h3>

              <div className="mt-4 space-y-1">
                {detail.lines.map((line) => (
                  <p key={line} className="text-sm font-light text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Venue Image */}
      <AnimateOnScroll delay={300}>
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-md border border-gold/20 shadow-lg">
            <Image
              src="/weddingwesite/images/venue.jpg"
              alt="Sudha Veerendra Samudhaya Bhavan"
              width={1200}
              height={700}
              className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Wedding Venue
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  )
}