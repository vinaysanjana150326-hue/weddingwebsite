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
        {details.map((detail, index) => {
          const cardContent = (
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
                  <p
                    key={line}
                    className="text-sm sm:text-base font-medium text-muted-foreground leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )

          return (
            <AnimateOnScroll key={detail.title} delay={index * 150}>
              {detail.link ? (
                // Only wrap in <a> if link exists (for Venue)
                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </AnimateOnScroll>
          )
        })}
      </div>

      {/* Venue Image */}
      <AnimateOnScroll delay={300}>
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg">
            <a
              href="https://maps.app.goo.gl/HFyJPTUUzkUjajAd6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/weddingwebsite/images/venue.jpg"
                alt="Sudha Veerendra Samudhaya Bhavan"
                width={1200}
                height={700}
                className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </a>
          </div>

          <p className="mt-4 text-center text-sm sm:text-base uppercase tracking-wider text-muted-foreground">
            Wedding Venue
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  )
}