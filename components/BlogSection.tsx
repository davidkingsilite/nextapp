'use client';

import Image from 'next/image';
import Divider from './Divider';
import Link from 'next/link';






const blogs = [
  {
    slug: 'eco-friendly-cleaning',
    title: 'Eco-Friendly Cleaning: How We Keep Your Home Green',
    date: 'JUNE 6, 2025',
    author: 'LISA NOON',
    excerpt:
      'Learn about our commitment to eco-friendly practices. We share the eco-conscious products and any others...',
    img: '/image (10).png',
    highlight: false,
  },
  {
    slug: 'clean-home-between-visits',
    title: 'How to Maintain a Clean Home Between Professional Visits',
    date: 'APRIL 12, 2025',
    author: 'JOHN HELTON',
    excerpt:
      'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...',
    img: '/image (11).png',
    highlight: true,
  },
  {
    slug: 'benefits-of-regular-cleaning',
    title: 'The Benefits of Regular Professional Cleaning',
    date: 'FEB 6, 2025',
    author: 'JOHN HELTON',
    excerpt:
      'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...',
    img: '/image (12).png',
    highlight: false,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 font-bevietnam">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Stay Updated with Our <br /> Tips & Service News!
            </h2>
          </div>
          <div className="max-w-md text-sm text-gray-600 mt-4 md:mt-0 gap-1 flex flex-col">
            <span className="font-semibold text-black">Our Blog</span>
            <p>
              Stay informed with our latest cleaning tips, service updates,
              expert advice on maintaining an immaculate home
            </p>
          </div>
        </div>
          <Divider />
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}> 
            <div className={`rounded-3xl overflow-hidden outline outline-1 outline-green-500 lg:hover:outline-2 outline-offset-2`}
            >
              <div className="h-60 relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  />
              </div>
              <div
                className={`p-6 flex-wrap items-center flex text-center justify-center font-bevietnam ${
                  blog.highlight ? 'bg-green-50 text-black-100' : 'text-black-100'
                }`}
                >
                <p className="text-xs font-semibold mb-2 text-gray-600">
                  {blog.author} &nbsp; {blog.date}
                </p>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    blog.highlight ? 'text-green-800' : 'text-black-100' 
                  }`}
                  >
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
                <button
                  className={`text-sm font-medium min-w-[240px] ${
                    blog.highlight
                    ? 'bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-md'
                    : 'underline text-black-100 hover:text-green-600 px-2 py-2'
                  }`}
                  >
                  Read More
                </button>
              </div>
            </div>
                  </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
