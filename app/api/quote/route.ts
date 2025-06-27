import { NextResponse } from 'next/server';
import connectToDB  from '@/lib/connectDB';
import  Quote  from '@/models/Quote';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, token } = body;

    const verifyCaptcha = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  { method: 'POST' }
      );

    const captchaResult = await verifyCaptcha.json();

    if (!captchaResult.success) {
  return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
    }


    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    await connectToDB();

    const newQuote = await Quote.create({ name, email, phone, service, message });

    await sendEmail(newQuote);


    return NextResponse.json({ message: 'Quote submitted successfully.' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
