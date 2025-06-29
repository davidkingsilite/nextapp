'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import CustomButton from './CustomBotton';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const features = [
  'Vetted professionals',
  'Next day availability',
  'Standard cleaning tasks',
  'Affordable Prices',
  'Best Quality',
  'Eco-friendly approach',
];

export default function AboutCompany() {
  const router = useRouter();

  return (
    <section className=" py-10 sm:py-14 bg-white font-bevietnam">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">

        {/* Animated Images */}
        <motion.div
          className="relative w-fit mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden w-full md:w-[320px] h-full md:h-[360px]">
            <Image
              src="/team-cleaners.png"
              alt="Cleaning Team"
              width={400}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
          <motion.div
            className="absolute bottom-[-30px] left-[180px] w-[200px] h-[180px] rounded-2xl shadow-xl overflow-hidden hidden sm:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/cleaning-table.png"
              alt="Cleaning Surface"
              width={300}
              height={300}
              className="object-cover w-full"
            />
          </motion.div>
        </motion.div>

        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Welcome To Our <br />
            Shaninomi Cleaning Company!
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F5F4F4] flex items-center gap-2 py-2 px-4 rounded-md text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-primary-green-100 w-5 h-5" />
                <span className="text-black-100">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <CustomButton
              title="Book Now"
              btnType="button"
              containerStyles="text-white rounded-md bg-primary-green-100 hover:bg-green-600 min-w-[130px] transition"
              handleClick={() => router.push('/get-a-quote')}
            />
            <CustomButton
              title="Know More"
              btnType="button"
              containerStyles="text-black-100 rounded-md min-w-[130px] outline outline-1 hover:bg-green-50 transition"
              handleClick={() => router.push('/about-us')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
