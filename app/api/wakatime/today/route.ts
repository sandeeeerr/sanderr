import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/status_bar/today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_API_KEY || ''
          ).toString('base64')}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Wakatime data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Wakatime today stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Wakatime data' },
      { status: 500 }
    );
  }
} 