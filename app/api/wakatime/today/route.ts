import { NextResponse } from 'next/server';
import { env } from '@/env'

// Cache for 1 minute for today stats to keep it relatively fresh
export const revalidate = 60

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
        next: { revalidate: 60 } // Cache for 1 minute for today stats
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Wakatime data');
    }

    const data = await response.json();
    // normalize to always include grand_total.total_seconds as a number
    const totalSeconds = data?.data?.grand_total?.total_seconds
    const normalized = {
      data: {
        grand_total: {
          decimal: data?.data?.grand_total?.decimal ?? '0',
          digital: data?.data?.grand_total?.digital ?? '0:00',
          total_seconds: typeof totalSeconds === 'number' && !Number.isNaN(totalSeconds) ? totalSeconds : 0
        }
      }
    }
    return NextResponse.json(normalized, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
      }
    });
  } catch (error) {
    console.error('Error fetching Wakatime today stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Wakatime data' },
      { status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );
  }
} 