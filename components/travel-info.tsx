"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Hotel, Plane, Car } from "lucide-react"

const travelItems = [
  {
    icon: Hotel,
    title: "Accommodations",
    description:
      "We have reserved a block of rooms at The Grand Rosewood Hotel, just a short walk from the venue. Mention the 'Rose-William Wedding' for a special rate.",
    link: "#",
    linkText: "Book Your Room",
  },
  {
    icon: Plane,
    title: "By Air",
    description:
      "The nearest airport is Countryside Regional Airport (CRA), approximately 25 minutes from the venue. Major carriers operate daily flights.",
  },
  {
    icon: Car,
    title: "By Car",
    description:
      "Complimentary valet parking will be available at the venue. The manor is conveniently located just off Route 9, with clear signage directing you from the highway.",
  },
]

export function TravelInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {travelItems.map((item, index) => (
        <AnimateOnScroll key={item.title} delay={index * 150}>
          <div className="flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center transition-all duration-500 hover:border-gold/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold/80"
              >
                {item.linkText}
              </a>
            )}
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  )
}
