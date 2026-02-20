import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { StoryTimeline } from "@/components/story-timeline"
import { ParallaxQuote } from "@/components/parallax-quote"

export const metadata: Metadata = {
  title: "Our Story - Eleanor & James",
  description: "The love story of Eleanor Rose and James William, from their first meeting to their forever.",
}

export default function OurStoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-card">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 px-6 pt-24 text-center">
          <SectionHeading
            title="Our Story"
            subtitle="A journey of love, laughter, and everything in between"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-12 md:py-20">
        <StoryTimeline />
      </section>

      {/* Quote */}
      <ParallaxQuote />
    </>
  )
}
