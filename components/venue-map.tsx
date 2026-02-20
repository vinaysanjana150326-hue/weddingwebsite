"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function VenueMap() {
  return (
    <AnimateOnScroll>
      <div className="overflow-hidden rounded-sm border border-border">
        <iframe
          title="Sudha veerendra samudaya bhavan"
          src="https://maps.app.goo.gl/jsne7NhSKUtFvSd97"
          width="100%"
          height="400"
          style={{ border: 0, filter: "sepia(15%) saturate(80%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </AnimateOnScroll>
  )
}
