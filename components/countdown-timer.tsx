"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime()
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
  const weddingDate = new Date("2026-09-15T16:00:00")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(weddingDate))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate))
    }, 1000)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-ivory/20 backdrop-blur-sm md:h-20 md:w-20">
              <span className="text-2xl font-light text-primary-foreground md:text-3xl">
                --
              </span>
            </div>
            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    )
  }

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
