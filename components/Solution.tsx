
'use client';

import React from 'react';
import CustomButton from './CustomBotton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Solution = () => {
  const router = useRouter();

  return (
    <section className="py-1 px-4 md:px-8">
      <div className="py-14 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 max-w-md w-full"
        > 
        {/* Left Text Section */}
        <div className="flex flex-col gap-5 max-w-md w-full">
          <div className="flex flex-col gap-3 text-black-100">
            <p className="text-xs font-light uppercase tracking-wide">Affordable cleaning solutions</p>
            <h1 className="text-3xl font-semibold font-outfit leading-snug">
              High-Quality and Friendly Services at Fair Prices
            </h1>
            <p className="text-sm font-light font-lato text-gray-700">
              We provide comprehensive cleaning services tailored to your needs — from residential upkeep to deep cleaning.
            </p>
           </div>

          <CustomButton
            title="Get a quote"
            btnType="button"
            containerStyles="text-primary-white rounded-full bg-primary-green-100 min-w-[130px] font-medium text-xs font-poppins"
            handleClick={() => router.push('/dashboard/login')}
            />
          </div>
        </motion.div>

         {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        > 

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Image-(3).png" // rename the file in your public folder
            alt="Cleaning in action"
            width={358}
            height={315}
            className="w-auto h-auto object-contain"
            priority
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
