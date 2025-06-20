// app/api/posts/[slug]/route.ts


import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import { Blog } from '@/models/Blog';



export async function GET(request: Request, context: { params: { slug: string } }) {

  const { slug } = await context.params; // ✅ await context first

  await connectDB();
  const post = await Blog.findOne({ slug });

  if (!post) {
    return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}
