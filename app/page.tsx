import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ParallaxQuote } from "@/components/parallax-quote"
import { EventDetails } from "@/components/event-details"
import { ContactForm } from "@/components/contact-form"
import { FloralDivider } from "@/components/floral-divider"
import { StoryTimeline } from "@/components/story-timeline"

export default function HomePage() {
  return (
    <main className="scroll-smooth">

      <HeroSection />

      <WelcomeSection />

      <section id="story">
        <ParallaxQuote />
      </section>

      <FloralDivider />

      {/* Story Section */}
      <section id="story" className="bg-background py-24">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-foreground"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Our Story
          </h2>
        </div>

        <StoryTimeline />
      </section>

      <FloralDivider />

      <section id="details" className="py-20">
        <EventDetails />
      </section>

      <FloralDivider />

      <section id="rsvp" className="py-20">
        <ContactForm />
      </section>

    </main>
  )
}