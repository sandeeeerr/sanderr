import { NextResponse } from 'next/server'

// import { env } from '@/env'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const GET = async () => {
  const res = await fetch(
    'https://wakatime.com/api/v1/users/current/all_time_since_today',
    {
      headers: {
        Authorization: `Basic ${Buffer.from("waka_68291b7f-567a-4b33-af73-0741c67d2335").toString(
          'base64'
        )}`
      }
    }
  )

  const {
    data: { total_seconds }
  } = await res.json()

  return NextResponse.json({
    seconds: total_seconds
  })
}