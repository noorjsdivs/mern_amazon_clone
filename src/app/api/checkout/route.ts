// /app/api/checkout/route.ts

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-08-01' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items } = body;

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('Invalid items');
    }

    // Create a new Checkout Session from the server
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Amount in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error.message); // More specific error logging
    return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 500 });
  }
}
