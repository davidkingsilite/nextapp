// import BlogSection from '@/components/BlogSection'
// import React from 'react'

// const page = () => {
   
//   return (
//     <div className='my-8 mx-8'>
//         <div><h1 className='text-3xl font-bold flex justify-center'>Welcome to our Blog</h1></div>
//         <BlogSection />
        

//     </div>
//   )
// }

// export default page

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '10 Proven Tips for Keeping Your Home Spotless',
    description:
      'Learn expert techniques to maintain a clean and organized home without spending all day scrubbing.',
    image: '/blog/cleaning1.jpg',
    date: 'June 15, 2025',
    author: 'Danielle Harper',
    category: 'Home Cleaning',
  },
  {
    id: 2,
    title: 'Office Cleaning: Why It Matters for Productivity',
    description:
      'Explore how a clean office contributes to employee satisfaction, productivity, and client impressions.',
    image: '/blog/cleaning2.jpg',
    date: 'May 30, 2025',
    author: 'Claire Whitmore',
    category: 'Office Cleaning',
  },
  {
    id: 3,
    title: 'Eco-Friendly Cleaning Products That Actually Work',
    description:
      'Discover our favorite green cleaning products that are safe for your family and the planet.',
    image: '/blog/cleaning3.jpg',
    date: 'May 10, 2025',
    author: 'Olivia Mensah',
    category: 'Green Cleaning',
  },
];

const BlogPage = () => {
  return (
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Our Cleaning Blog</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Helpful tips, insights, and news from Pro Cleaning — your go-to source for professional and home cleaning advice.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
            <div className="w-full h-48 relative">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="text-xs text-primary-green-100 font-medium uppercase">{post.category}</span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="text-xs text-gray-400 mt-2">
                By <span className="text-black font-medium">{post.author}</span> · {post.date}
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-primary-green-100 font-semibold text-sm hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-20 bg-primary-green-100/10 py-12 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Want Cleaning Tips in Your Inbox?</h2>
        <p className="text-sm text-gray-700 mb-6">
          Subscribe to our newsletter for regular updates and promotions.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-primary-green-100 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition"
        >
          Subscribe Now
        </Link>
      </section>
    </main>
  );
};

export default BlogPage;
