"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function VenueMap() {
  return (
    <AnimateOnScroll>
      <div className="overflow-hidden rounded-sm border border-border">
        <iframe
          title="Rosewood Manor Gardens Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036024!2d-73.98823492404045!3d40.75797503540682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1703180000000!5m2!1sen!2sus"
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
