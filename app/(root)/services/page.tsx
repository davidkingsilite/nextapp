// import ServicesList from '@/components/ServicesList'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//         <ServicesList />
//     </div>
//   )
// }

// export default page

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Thorough cleaning for your entire home — bedrooms, bathrooms, kitchens, and more.',
    icon: '/residential.svg',
  },
  {
    title: 'Office Cleaning',
    description:
      'Professional, scheduled cleaning services for commercial and office environments.',
    icon: '/office.svg',
  },
  {
    title: 'Move-In / Move-Out',
    description:
      'Detailed top-to-bottom cleaning for when you’re moving in or out of a property.',
    icon: '/move.svg',
  },
  {
    title: 'Post-Construction',
    description:
      'Remove dust, debris, and construction residue with our deep cleaning expertise.',
    icon: '/construction.svg',
  },
  {
    title: 'Deep Cleaning',
    description:
      'Extra attention to neglected or high-traffic areas for a fresher, healthier space.',
    icon: '/deep.svg',
  },
  {
    title: 'Window Cleaning',
    description:
      'Crystal-clear results with streak-free window cleaning, inside and out.',
    icon: '/window.svg',
  },
];

const ServicePage = () => {
  return (
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Whether it’s a one-time deep clean or recurring service, ProCleaning is committed to sparkling results and customer satisfaction.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 mx-auto mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">What You Can Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Custom Plans',
              text: 'Flexible packages tailored to your home or office’s size and needs.',
              icon: '/plan.svg',
            },
            {
              title: 'Trusted Cleaners',
              text: 'Background-checked, experienced staff you can trust with your space.',
              icon: '/trust.svg',
            },
            {
              title: 'Eco Products',
              text: 'We use safe, non-toxic cleaning products to protect your environment.',
              icon: '/eco.svg',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-primary-green-100/10 p-6 rounded-xl shadow-sm"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green-100 text-white text-center py-14 px-4 rounded-2xl max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Cleaning?</h2>
        <p className="mb-6 text-sm">
          Join hundreds of happy clients enjoying spotless homes and offices.
        </p>
        <Link
          href="/get-a-quote"
          className="inline-block bg-white text-primary-green-100 px-6 py-2 font-medium text-sm rounded-full hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
};

export default ServicePage;
