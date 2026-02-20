import { cn } from "@/lib/utils"

interface FloralDividerProps {
  className?: string
}

export function FloralDivider({ className }: FloralDividerProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gold"
      >
        <path
          d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M12 22C12 22 8 18 8 14C8 11.5 9.5 10 12 10C14.5 10 16 11.5 16 14C16 18 12 22 12 22Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M2 12C2 12 6 8 10 8C12.5 8 14 9.5 14 12C14 14.5 12.5 16 10 16C6 16 2 12 2 12Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M22 12C22 12 18 8 14 8C11.5 8 10 9.5 10 12C10 14.5 11.5 16 14 16C18 16 22 12 22 12Z"
          fill="currentColor"
          opacity="0.3"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  )
}
