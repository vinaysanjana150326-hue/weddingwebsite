import type { Metadata } from "next"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { EventDetails } from "@/components/event-details"
import { RsvpForm } from "@/components/rsvp-form"
import { VenueMap } from "@/components/venue-map"
import { TravelInfo } from "@/components/travel-info"
import { FloralDivider } from "@/components/floral-divider"

export const metadata: Metadata = {
  title: "The Event - Eleanor & James",
  description: "Wedding details, venue information, and RSVP for Eleanor and James' wedding on September 15, 2026.",
}

export default function EventPage() {
  return (
    <>
      {/* Page Header with venue image */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/venue.jpg"
          alt="Rosewood Manor Gardens wedding venue"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-warm-brown/50" />
        <div className="relative z-10 px-6 pt-24 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
            Join Us On
          </p>
          <h1
            className="mt-4 text-6xl text-primary-foreground md:text-7xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            The Celebration
          </h1>
          <p className="mt-4 text-lg font-light tracking-[0.1em] text-primary-foreground/90">
            September 15, 2026 at Rosewood Manor Gardens
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            title="Wedding Details"
            subtitle="Everything you need to know about our special day"
          />
          <div className="mt-16">
            <EventDetails />
          </div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading title="The Venue" subtitle="Rosewood Manor Gardens" />
          <div className="mt-12">
            <VenueMap />
          </div>
        </div>
      </section>

      {/* Travel Info */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            title="Getting There"
            subtitle="Travel and accommodation information for our guests"
          />
          <div className="mt-16">
            <TravelInfo />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <SectionHeading
            title="RSVP"
            subtitle="Kindly respond by August 1, 2026"
          />
          <FloralDivider className="mt-8" />
          <div className="mt-12">
            <RsvpForm />
          </div>
        </div>
      </section>
    </>
  )
}
