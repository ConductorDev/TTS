import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID; // The Train Station's Google Place ID

    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      throw new Error('Missing required environment variables');
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
