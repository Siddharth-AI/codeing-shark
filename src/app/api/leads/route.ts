
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request Body:", body);
    const response = await fetch('https://api.365crm.io/wpaddwebsiteleads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.NEXT_PUBLIC_CRM_API_KEY || 'apikey'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log("CRM Response:", data);
    console.log("key:", process.env.NEXT_PUBLIC_CRM_API_KEY);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to submit lead' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}