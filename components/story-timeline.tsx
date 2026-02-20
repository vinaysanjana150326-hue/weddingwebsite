"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { cn } from "@/lib/utils"

const timelineEvents = [
  {
    date: "June 2019",
    title: "The First Meeting",
    description:
      "It started with a quiet cup of tea and a polite smile. What began as an arranged meeting between two strangers soon turned into a soulful connection. From nervous first talks to late-night conversations, we found love in the little things: in honesty, in steadiness, and in the comfort of saying, we’ll figure it out together. Two strangers. One honest connection. A lifetime of togetherness.",
    image: "/images/first_meet.jpeg",
    imageAlt: "Vinay and Sanjana at their first meeting",
  },
  
]

export function StoryTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl px-6 py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent md:block" />

      <div className="flex flex-col gap-20 md:gap-28">
        {timelineEvents.map((event, index) => (
          <AnimateOnScroll key={event.date} delay={index * 100}>
            <div
              className={cn(
                "flex flex-col items-center gap-8 md:flex-row md:gap-16",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2">
                <div className="group relative overflow-hidden">
                  <div className="absolute -inset-2 border border-gold/20" />
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={cn("w-full text-center md:w-1/2", index % 2 === 1 ? "md:text-right" : "md:text-left")}>
                {/* Timeline dot (desktop only) */}
                <div className="mb-6 hidden md:flex md:justify-center">
                  <div className={cn(
                    "relative",
                    index % 2 === 1 ? "md:ml-auto md:mr-[-2.5rem]" : "md:mr-auto md:ml-[-2.5rem]"
                  )}>
                    <div className="h-3 w-3 rounded-full bg-gold" />
                    <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-gold/30" />
                  </div>
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  {event.date}
                </span>
                <h3
                  className="mt-3 text-3xl text-foreground md:text-4xl"
                  style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                  {event.title}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}
