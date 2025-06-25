
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Key } from 'react';


interface Params {
  slug: string;
}

export default async function BlogPost({ params }: { params:Params }) {

  const { slug } = await params; 

  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, { cache: 'no-store' });

  if (!res.ok){
    throw new Error("Failed");
   } 

  const post = await res.json();

   if (!post) return notFound();


  return (
    // <article className="max-w-3xl mx-auto px-4 py-10">
    //    <div className="h-[400px] w-full mb-10 relative">
    //             <Image
    //               src={post.img}
    //               alt={post.title}
    //               fill
    //               className="object-cover"
    //               />
    //           </div>
    //   <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
    //   <p className="text-sm font-semibold mb-2 text-gray-600">
    //               {post.author} &nbsp; {post.date}
    //             </p>
      
    //   <div className="prose lg:prose-xl">{post.content}</div>
    // </article>
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100 max-w-4xl mx-auto">
      {/* Back link */}
      <Link href="/blog" className="text-sm text-primary-green-100 hover:underline">
        ← Back to Blog
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
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
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
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
      </motion.div>
    </main>
  );
}


// 'use client';

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const blogPosts = [
//   {
//     id: '1',
//     title: '10 Proven Tips for Keeping Your Home Spotless',
//     coverImage: '/blog/cleaning1.jpg',
//     date: 'June 15, 2025',
//     author: 'Danielle Harper',
//     category: 'Home Cleaning',
//     content: `
// Cleaning your home doesn't have to be overwhelming. With the right habits and a smart routine, your home can stay sparkling clean all week.

// **1. Make Your Bed Daily**  
// Starting your day with a made bed instantly makes your room feel cleaner.

// **2. Wipe Surfaces After Use**  
// This includes kitchen counters, bathroom sinks, and dining tables.

// **3. Use Doormats**  
// Placing doormats at every entrance reduces dirt from shoes inside.

// **4. Implement the “5-Minute Rule”**  
// Spend just 5 minutes decluttering a room each day.

// > “Clean spaces promote peace and productivity.” — ProCleaning Team

// … and many more!
//     `,
//   },
//   // Add more posts if needed
// ];

// export default function BlogPostPage() {
//   const { id } = useParams();
//   const post = blogPosts.find((p) => p.id === id);

//   if (!post) {
//     return <div className="text-center py-20 text-gray-600">Post not found.</div>;
//   }

//   return (
//     <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100 max-w-4xl mx-auto">
//       {/* Back link */}
//       <Link href="/blog" className="text-sm text-primary-green-100 hover:underline">
//         ← Back to Blog
//       </Link>

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-4"
//       >
//         <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
//         <div className="text-sm text-gray-500 mb-4">
//           By <span className="font-medium text-black">{post.author}</span> · {post.date} ·{' '}
//           <span className="text-primary-green-100">{post.category}</span>
//         </div>

//         {/* Cover Image */}
//         <div className="w-full h-[250px] sm:h-[350px] relative rounded-xl overflow-hidden mb-8">
//           <Image
//             src={post.coverImage}
//             alt={post.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-xl"
//             placeholder="blur"
//             blurDataURL="/placeholder.jpg"
//           />
//         </div>

//         {/* Content */}
//         <article className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-p:text-gray-700 prose-li:text-gray-600">
//           {post.content.split('\n').map((line, i) => (
//             <p key={i}>{line.trim()}</p>
//           ))}
//         </article>
//       </motion.div>
//     </main>
//   );
// }

