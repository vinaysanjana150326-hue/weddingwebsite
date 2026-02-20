import { FloralDivider } from "@/components/floral-divider"

export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FloralDivider />
        <p
          className="mt-8 text-4xl text-gold"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          {"Eleanor & James"}
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          September 15, 2026
        </p>
        <p className="mt-8 text-xs text-muted-foreground tracking-wider">
          Made with love for our cherished guests
        </p>
      </div>
    </footer>
  )
}
