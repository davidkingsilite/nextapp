'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Business Man',
    rating: 5,
    message:
      'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service',
    image: '/clientPic1.png', // Replace with actual image URL or static import
  },
  {
    name: 'David Fox',
    role: 'Business Man',
    rating: 5,
    message:
      'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service',
    image: '/clientPic1.png', // Replace with actual image URL or static import
  },
  {
    name: 'Anita Lisa',
    role: 'Business Man',
    rating: 5,
    message:
      'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service',
    image: '/clientPic1.png', // Replace with actual image URL or static import
  },
  {
    name: 'Robert John',
    role: 'Business Man',
    rating: 5,
    message:
      'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service',
    image: '/clientPic1.png', // Replace with actual image URL or static import
  },
  
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { name, role, rating, message, image } = testimonials[current];

  return (
    <section className="py-20 px-4 bg-white font-bevietnam">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Feedback About Their <br /> Experience With Us
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
            Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes
          </p>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-md border border-green-500 text-green-500 hover:bg-green-50 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right: Testimonial Card */}
        <div className="relative">
          <div className="rounded-2xl border-2 border-green-500 p-6 flex items-start gap-6 bg-white shadow-md overflow-hidden">
            {/* <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-xl object-cover"
            /> */}
            <Image
               src={image}
               alt={name}
               width={130}
               height={200}
               className='w-28 h-44 rounded-xl object-cover'
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">{role}</p>

              <div className="flex items-center gap-1 my-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-600 text-sm">{message}</p>
            </div>

            <div className="absolute top-4 right-4 bg-green-500 rounded-md p-2">
              <Quote className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
