'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import CustomButton from './CustomBotton';
import { useRouter } from 'next/navigation'


const features = [
  'Vetted professionals',
  'Next day availability',
  'Standard cleaning tasks',
  'Affordable Prices',
  'Best Quality',
  'Affordable Prices',
];

export default function AboutSection() {
 
  const router = useRouter();

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden w-[320px] h-[360px]">
            <Image
              src="/team-cleaners.png"
              alt="Cleaning Team"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-30px] left-60 w-[200px] h-[180px] rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/cleaning-table.png"
              alt="Cleaning Surface"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className='font-bevietnam'>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Welcome To Our <br />
            Pro-cleaning Company!
          </h2>
          <p className="text-grey-100 mb-8 max-w-lg">
            We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F4F4] flex items-center gap-2 py-2 px-4 rounded-md text-sm font-lato"
              >
                <CheckCircle className="text-primary-green-100 w-5 h-5" />
                <span className="text-black-100">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap font-medium">
          <CustomButton
           title='Book Now'
           btnType='button'
           containerStyles= "text-primary-white rounded-md bg-primary-green-100 hover:bg-green-600 min-w-[130px] transition"
           handleClick={()=>router.push('/dashboard/login')}
          />
          <CustomButton
           title='Know More'
           btnType='button'
           containerStyles= "text-black-100 rounded-md min-w-[130px] outline outline-1 hover:bg-green-50 transition"
           handleClick={()=>router.push('/dashboard/login')}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
