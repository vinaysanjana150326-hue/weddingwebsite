"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Clock, MapPin, Shirt, Utensils } from "lucide-react"

const details = [
  {
    icon: Clock,
    title: "Ceremony",
    lines: ["Saturday, September 15, 2026", "4:00 PM"],
  },
  {
    icon: Utensils,
    title: "Reception",
    lines: ["Immediately following the ceremony", "Dinner, dancing & celebration"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["Rosewood Manor Gardens", "142 Rosewood Lane, Countryside, NY"],
  },
  {
    icon: Shirt,
    title: "Dress Code",
    lines: ["Formal / Black Tie Optional", "Garden-appropriate footwear recommended"],
  },
]

export function EventDetails() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {details.map((detail, index) => (
        <AnimateOnScroll key={detail.title} delay={index * 150}>
          <div className="group flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <detail.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              {detail.title}
            </h3>
            <div className="mt-3 space-y-1">
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
  )
}
