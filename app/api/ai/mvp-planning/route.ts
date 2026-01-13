import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_BASE_URL) {
        return NextResponse.json({ error: "Backend URL not configured" }, { status: 500 });
    }

    const response = await fetch(`${API_BASE_URL}/api/ai/mvp-planning`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: 'Failed to generate MVP plan', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in MVP planning route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
