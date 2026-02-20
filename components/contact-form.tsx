"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Check, Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-sm border border-gold/30 bg-card p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
          <Check className="h-8 w-8 text-accent-foreground" />
        </div>
        <h3
          className="mt-6 text-3xl text-gold"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Message Sent!
        </h3>
        <p className="mt-4 text-sm font-light text-muted-foreground">
          Thank you for reaching out. We will get back to you soon!
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      {/* Contact Info */}
      <AnimateOnScroll className="lg:col-span-2">
        <div className="space-y-8">
          <div>
            <h3
              className="text-3xl text-gold"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Get in Touch
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Have any questions about the wedding, travel arrangements, or
              anything else? We would love to hear from you. Reach out and
              we will respond as soon as possible.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                  Email
                </p>
                <p className="mt-1 text-sm font-light text-muted-foreground">
                  eleanor.james2026@email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                  Phone
                </p>
                <p className="mt-1 text-sm font-light text-muted-foreground">
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                  Venue
                </p>
                <p className="mt-1 text-sm font-light text-muted-foreground">
                  Rosewood Manor Gardens
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Form */}
      <AnimateOnScroll delay={200} className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-border bg-card p-8 md:p-10"
        >
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Write your message here..."
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex items-center bg-gold px-10 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </AnimateOnScroll>
    </div>
  )
}
