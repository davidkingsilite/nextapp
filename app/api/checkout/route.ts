import Stripe from 'stripe';
import { NextResponse } from 'next/server';



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  const { plan, email } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: plan },
          unit_amount: getPlanAmount(plan), // cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}

function getPlanAmount(plan: string) {
  const prices: Record<string, number> = {
    'BASIC PACKAGE': 5900,
    'ENTERPRISE PACKAGE': 6900,
    'PREMIUM PACKAGE': 9900,
  };
  return prices[plan] || 5900;
}
