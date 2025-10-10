import { NextResponse } from 'next/server'

import { env } from '@/env'

// Cache for 5 minutes to speed up WakaTime API
export const revalidate = 300

export const GET = async () => {
  try {
    const res = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            'base64'
          )}`
        },
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    )

    const json = await res.json()
    const totalSeconds = json?.data?.total_seconds
    const seconds = typeof totalSeconds === 'number' && !Number.isNaN(totalSeconds) ? totalSeconds : 0
    
    return NextResponse.json({ seconds }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('Error fetching WakaTime data:', error)
    return NextResponse.json({ seconds: 0 }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
      }
    })
  }
}