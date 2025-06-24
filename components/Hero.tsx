// "use client"

// import Image from 'next/image'
// import React from 'react'
// import CustomButton from './CustomBotton'
// import { useRouter } from 'next/navigation'

// const Hero = () => {

//   const router = useRouter()
//   return (
//     <div className='relative max-w-fit'>
//         <div className="hero__image-container">
//             <div className="hero__image">
//                 <Image src="/hero_lamge.png" alt="hero" width={1280} height={590} priority className="object-contain"/>
//             </div>        
//         </div>
//         <div className='absolute top-0 justify-between flex flex-col pl-[100px] pr-[512px] py-[78px] w-full gap-7'>
//                   <div className='flex flex-col gap-3 font-bevietnam'>
//                      <span>Quality cleaning at a fair price</span>
//                      <div className='flex flex-col gap-5'>
//                        <h1 className='font-bevietnam font-bold sm:text-lg md:text-3xl'>Specialized, efficient,<br/>
//                          and thorough cleaning <br/> services
//                        </h1>
//                         <span>We provide Performing cleaning tasks using the least amount of time, energy, and money.</span>
//                      </div>
//                   </div>
//                     <div className='flex gap-5 font-bevietnam font-semibold text-sx justify-start items-center'>
//                       <CustomButton
//                          title='Get Now'
//                          btnType='button'
//                          containerStyles= "text-primary-white rounded-[4.5px] bg-primary-green-100 min-w-[130px]"
//                          handleClick={()=>router.push('/dashboard/login')}
//                         />
//                        <CustomButton
//                          title='View all Services'
//                          btnType='button'
//                          containerStyles='text-black-100 rounded-[4.5px] outline outline-1 hover:outline-2 outline-[#666666] '
//                          handleClick={()=>router.push('/dashboard/login')}
//                         />
//                     </div>
//                </div>
//     </div>
//   )
// }

// export default Hero


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
        <div className="px-6 sm:px-10 md:px-16 lg:px-28 py-8 w-full max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-[1px] p-6 sm:p-10 rounded-lg w-full md:w-1/2 flex flex-col gap-6">
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
                handleClick={() => router.push('/dashboard/login')}
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
