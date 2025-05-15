"use client"

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomBotton'
import { useRouter } from 'next/navigation'

const Hero = () => {

  const router = useRouter()
  return (
    <div className='relative'>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero_lamge.png" alt="hero" width={1280} height={590} priority className="object-contain"/>
            </div>        
        </div>
        <div className='absolute top-0 justify-between flex flex-col pl-[100px] pr-[512px] py-[78px] w-full gap-7'>
                  <div className='flex flex-col gap-3 font-bevietnam'>
                     <span>Quality cleaning at a fair price</span>
                     <div className='flex flex-col gap-5'>
                       <h1 className='font-bevietnam font-bold text-3xl'>Specialized, efficient,<br/>
                         and thorough cleaning <br/> services
                       </h1>
                        <span>We provide Performing cleaning tasks using the least amount of time, energy, and money.</span>
                     </div>
                  </div>
                    <div className='flex gap-5 font-bevietnam font-semibold text-sx justify-start items-center'>
                      <CustomButton
                         title='Get Now'
                         btnType='button'
                         containerStyles= "text-primary-white rounded-[4.5px] bg-primary-green-100 min-w-[130px] "
                         handleClick={()=>router.push('/dashboard/login')}
                        />
                       <CustomButton
                         title='View all Services'
                         btnType='button'
                         containerStyles='text-black-100 rounded-[4.5px] outline outline-1 hover:outline-2 outline-[#666666] '
                         handleClick={()=>router.push('/dashboard/login')}
                        />
                    </div>
               </div>
    </div>
  )
}

export default Hero