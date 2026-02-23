"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Clock, MapPin } from "lucide-react"

const details = [
  {
    icon: Clock,
    title: "Ceremony",
    lines: [
      "Reception: Saturday, March 14, 2026, 7:30 PM onwards",
      "Muhurtham: Sunday, March 15, 2026, 9:00 AM to 9:50 AM",
    ],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["Sudha Veerendra Samudhaya Bhavan", "Davangere, Karnataka"],
    link: "https://maps.app.goo.gl/HFyJPTUUzkUjajAd6",
  },
]

export function EventDetails() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2">
        {details.map((detail, index) => (
          <AnimateOnScroll key={detail.title} delay={index * 150}>
            <div className="group flex flex-col items-center rounded-lg border border-border bg-card p-12 text-center transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:scale-105">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <detail.icon className="h-8 w-8 text-gold" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-sm sm:text-base font-bold uppercase tracking-wide text-foreground">
                {detail.title}
              </h3>

              {/* Lines */}
              <div className="mt-4 space-y-2">
                {detail.lines.map((line) => (
                  <p key={line} className="text-sm sm:text-base font-medium text-muted-foreground leading-relaxed">
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
              src="/weddingwebsite/images/venue.jpg"
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