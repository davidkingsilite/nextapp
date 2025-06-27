
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Key } from 'react';


interface Params {
  slug: string;
}

export default async function BlogPost({ params }: { params:Params }) {

  const { slug } = params; 

  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, { cache: 'no-store' });

  if (!res.ok){
    throw new Error("Failed");
   } 
 
  const post = await res.json();

   if (!post) return notFound();


  return (
    
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100 max-w-4xl mx-auto">
      {/* Back link */}
      <Link href="/blog" className="text-sm text-primary-green-100 hover:underline">
        ← Back to Blog
      </Link>

      {/* Header */}
     
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          By <span className="font-medium text-black">{post.author}</span> · {post.date} ·{' '}
          <span className="text-primary-green-100">{post.category}</span>
        </div>

        {/* Cover Image */}
        <div className="w-full h-[250px] sm:h-[350px] relative rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-xl object-cover"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
        </div>

        {/* Content */}
        <article className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-p:text-gray-700 prose-li:text-gray-600">
          {post.content.split('\n').map((line: string, i: Key | null | undefined) => (
            <p key={i}>{line.trim()}</p>
          ))}
        </article>
     
    </main>
  );
}

