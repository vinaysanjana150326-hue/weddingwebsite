"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function CountdownTimer() {
  // Use local date numbers to avoid timezone issues
  const weddingDate = new Date(2026, 2, 15, 16, 0, 0) // Mar is 2

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // calculate immediately on mount
    setTimeLeft(calculateTimeLeft(weddingDate))

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-ivory/20 backdrop-blur-sm md:h-20 md:w-20">
            <span className="text-2xl font-light tabular-nums text-primary-foreground md:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}