import { NextResponse } from 'next/server'

import { env } from '@/env'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const res = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            'base64'
          )}`
        }
      }
    )

    const json = await res.json()
    const totalSeconds = json?.data?.total_seconds
    const seconds = typeof totalSeconds === 'number' && !Number.isNaN(totalSeconds) ? totalSeconds : 0
    return NextResponse.json({ seconds })
  } catch (error) {
    console.error('Error fetching WakaTime data:', error)
    return NextResponse.json({ seconds: 0 })
  }
}