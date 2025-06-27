'use client';

import Image from 'next/image';
import Divider from './Divider';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: '10-proven-tips-keeping-home-spotless',
    title: '10 Proven Tips for Keeping Your Home Spotless',
    description:
      'Learn expert techniques to maintain a clean and organized home without spending all day scrubbing.',
    image: '/Image-(10).png',
    date: 'June 15, 2025',
    author: 'Danielle Harper',
    category: 'Home Cleaning',
    highlight: false,
  },
  {
    id: 2,
    slug: 'office-cleaning-matters',
    title: 'Office Cleaning: Why It Matters for Productivity',
    description:
      'Explore how a clean office contributes to employee satisfaction, productivity, and client impressions.',
    image: '/Image-(11).png',
    date: 'May 30, 2025',
    author: 'Claire Whitmore',
    category: 'Office Cleaning',
    highlight: true,
  },
  {
    id: 3,
    slug: 'eco-friendly-cleaning',
    title: 'Eco-Friendly Cleaning Products That Actually Work',
    description:
      'Discover our favorite green cleaning products that are safe for your family and the planet.',
    image: '/Image-(12).png',
    date: 'May 10, 2025',
    author: 'Olivia Mensah',
    category: 'Green Cleaning',
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
          {blogPosts.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}> 
            <div className={`rounded-3xl overflow-hidden outline outline-1 outline-green-500 lg:hover:outline-2 outline-offset-2`}
            >
              <div className="h-60 w-full relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-full"
                  />
              </div>
              <div
                className={`p-6 items-center flex flex-col text-center justify-center font-bevietnam ${
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
                <p className="text-sm text-gray-700 mb-4">{blog.description}</p>
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


