
'use client';

import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomBotton';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[590px]">
        <Image
          src="/hero_lamge.png"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero Content (overlaid on image for large screens) */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-2 sm:px-10 md:px-16 lg:px-28 py-8 w-full max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-[1px] p-4 sm:p-10 rounded-lg w-full md:w-2/3 lg:w-1/2 flex flex-col gap-6">
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Quality cleaning at a fair price
            </span>
            <h1 className="font-bevietnam font-bold text-2xl sm:text-3xl md:text-4xl leading-snug text-gray-900">
              Specialized, efficient,<br />
              and thorough cleaning<br />
              services
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Performing cleaning tasks using the least amount of time, energy, and money.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton
                title="Get Now"
                btnType="button"
                containerStyles="text-white bg-primary-green-100 hover:bg-green-600 rounded px-6 py-2 text-sm font-medium"
                handleClick={() => router.push('/get-a-quote')}
              />
              <CustomButton
                title="View all Services"
                btnType="button"
                containerStyles="text-black-100 outline outline-1 outline-gray-600 lg:hover:outline-2 outline-offset-2 rounded px-6 py-2 text-sm font-medium"
                handleClick={() => router.push('/services')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
