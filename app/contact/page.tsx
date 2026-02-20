import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact - Eleanor & James",
  description: "Get in touch with Eleanor and James for any questions about their wedding.",
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-card">
        {/* Floral / lace pattern background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E'%3E%3Cpath d='M40 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 38c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM10 40c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm60-2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 px-6 pt-24 text-center">
          <SectionHeading
            title="Contact Us"
            subtitle="We would love to hear from you"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ContactForm />
        </div>
      </section>

      {/* Decorative lace section */}
      <section className="relative bg-card py-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50Z' fill='none' stroke='%23C9A96E' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p
            className="text-3xl text-gold"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            {"We can't wait to celebrate with you!"}
          </p>
          <p className="mt-4 text-sm font-light text-muted-foreground">
            September 15, 2026 at Rosewood Manor Gardens
          </p>
        </div>
      </section>
    </>
  )
}
