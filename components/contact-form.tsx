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
      <div className="mx-auto max-w-xl rounded-md border border-gold/30 bg-card p-12 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <Check className="h-8 w-8 text-gold" />
        </div>

        <h3
          className="mt-6 text-4xl text-gold"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Message Sent!
        </h3>

        <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
          Thank you for reaching out. We truly appreciate your message
          and will respond as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-16 lg:grid-cols-2">

        {/* Contact Info - CENTERED */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center space-y-10">

            <div>
              <h3
                className="text-4xl text-gold"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Get in Touch
              </h3>

              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Have any questions about the wedding, travel arrangements,
                or anything else? We would love to hear from you.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex flex-col items-center gap-2">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Email
                </p>
                <p className="text-sm font-light text-muted-foreground">
                  vinaysanjana150326@gmail.com
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Phone
                </p>
                <p className="text-sm font-light text-muted-foreground">
                  +91 8496017056
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Venue
                </p>
                <p className="text-sm font-light text-muted-foreground text-center">
                  Sudha Veerendra Samudhaya Bhavan
                </p>
              </div>

            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll delay={200}>
          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-border bg-card p-10 shadow-sm"
          >
            <div className="space-y-8">

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-b border-border bg-transparent py-3 text-sm font-light focus:border-gold focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-b border-border bg-transparent py-3 text-sm font-light focus:border-gold focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-foreground">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="border-b border-border bg-transparent py-3 text-sm font-light focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

            </div>

            <div className="mt-10 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gold px-12 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-gold/90 hover:shadow-xl"
              >
                Send Message
              </button>
            </div>

          </form>
        </AnimateOnScroll>
      </div>
    </div>
  )
}