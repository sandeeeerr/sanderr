"use client"

import React, { useEffect, useState } from 'react'

export default function FooterClock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date())
      setTime(now)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <small className="block mb-2 text-xs">{time}</small>
}


