
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { Key } from 'react';


// interface Params {
//   slug: string;
// }

// interface BlogPostProps {
//   params: Params;
// }

// export default async function BlogPost({ params }: BlogPostProps) {

//   const { slug } = params; 

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, { cache: 'no-store' });

//   if (!res.ok){
//     throw new Error("Failed");
//    } 
 

   
//   const post = await res.json();

//    if (!post) return notFound();


//   return (
    
//     <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100 max-w-4xl mx-auto">
//       {/* Back link */}
//       <Link href="/blog" className="text-sm text-primary-green-100 hover:underline">
//         ← Back to Blog
//       </Link>

//       {/* Header */}
     
//         <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
//         <div className="text-sm text-gray-500 mb-4">
//           By <span className="font-medium text-black">{post.author}</span> · {post.date} ·{' '}
//           <span className="text-primary-green-100">{post.category}</span>
//         </div>

//         {/* Cover Image */}
//         <div className="w-full h-[250px] sm:h-[350px] relative rounded-xl overflow-hidden mb-8">
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="rounded-xl object-cover"
//             placeholder="blur"
//             blurDataURL="/placeholder.jpg"
//           />
//         </div>

//         {/* Content */}
//         <article className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-p:text-gray-700 prose-li:text-gray-600">
//           {post.content?.split('\n').map((line: string, i: Key ) => (
//             <p key={i}>{line.trim()}</p>
//           ))}
//         </article>
     
//     </main>
//   );
// }


// app/(root)/blog/[slug]/page.tsx

/* eslint-disable */


import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Key } from 'react';

interface Params {
  slug: string;
}

interface BlogPostProps {
  params: Params;
}

// ✅ Enable static generation for known slugs only (optional but SEO-friendly)
export const dynamicParams = false;

// ✅ Pre-generate known slugs
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch slugs');
  }

  const posts = await res.json();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// ✅ The actual blog post page
export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
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
        {post.content?.split('\n').map((line: string, i: Key) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </article>
    </main>
  );
}
