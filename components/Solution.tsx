'use client';

import React from 'react';
import CustomButton from './CustomBotton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Solution = () => {
  const router = useRouter();

  return (
    <section className="py-14 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs uppercase text-green-600 tracking-wide font-medium font-bevietnam">
            Affordable Cleaning Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold font-outfit text-black-100 leading-snug">
            High-Quality and Friendly Services at Fair Prices
          </h2>
          <p className="text-base text-gray-700 font-lato">
            We provide comprehensive cleaning services tailored to your needs — from residential upkeep to deep cleaning.
          </p>

          <CustomButton
            title="Get a quote"
            btnType="button"
            containerStyles="text-white bg-primary-green-100 hover:bg-green-600 rounded-full px-6 py-2 text-sm font-medium"
            handleClick={() => router.push('/get-a-quote')}
          />
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-[315px]">
            <Image
              src="/Image-(3).png"
              alt="Cleaning in action"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
