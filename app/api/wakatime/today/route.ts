import { NextResponse } from 'next/server';
import { env } from '@/env'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/status_bar/today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            env.WAKATIME_API_KEY
          ).toString('base64')}`,
        },
        cache: 'no-store',
        next: { revalidate: 0 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Wakatime data');
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
      }
    });
  } catch (error) {
    console.error('Error fetching Wakatime today stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Wakatime data' },
      { status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
        }
      }
    );
  }
} 