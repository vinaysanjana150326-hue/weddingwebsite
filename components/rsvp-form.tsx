"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Check } from "lucide-react"

export function RsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    dietary: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AnimateOnScroll>
        <div className="flex flex-col items-center rounded-sm border border-gold/30 bg-card p-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Check className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3
            className="mt-6 text-3xl text-gold"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Thank You!
          </h3>
          <p className="mt-4 text-sm font-light text-muted-foreground">
            Your RSVP has been received. We look forward to celebrating with you!
          </p>
        </div>
      </AnimateOnScroll>
    )
  }

  return (
    <AnimateOnScroll>
      <form
        onSubmit={handleSubmit}
        className="rounded-sm border border-border bg-card p-8 md:p-12"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="rsvp-name" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Full Name
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="rsvp-email" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Email Address
            </label>
            <input
              id="rsvp-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
              placeholder="vinaysanjana150326@email.com"
            />
          </div>

          {/* Attending */}
          <div className="flex flex-col gap-2">
            <label htmlFor="rsvp-attending" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Will You Attend?
            </label>
            <select
              id="rsvp-attending"
              value={formData.attending}
              onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
              className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground focus:border-gold focus:outline-none transition-colors"
            >
              <option value="yes">Joyfully Accepts</option>
              <option value="no">Respectfully Declines</option>
            </select>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label htmlFor="rsvp-guests" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Number of Guests
            </label>
            <select
              id="rsvp-guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground focus:border-gold focus:outline-none transition-colors"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          

          {/* Message */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="rsvp-message" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              A Note to the Couple
            </label>
            <textarea
              id="rsvp-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Share your well wishes..."
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            type="submit"
            className="inline-flex items-center bg-gold px-10 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Send RSVP
          </button>
        </div>
      </form>
    </AnimateOnScroll>
  )
}
