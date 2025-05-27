"use client"


import React from 'react'
import CustomButton from './CustomBotton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Company = () => {

    const router = useRouter()

  return (
    <div className='py-14 justify-between flex items-center gap-20'>

     <div>
        <Image 
          src="/Images.png"
          alt="cleaning pics"
          height={330}
          width={400}
        />
        
     </div>
     <div className='flex flex-col justify-start w-[400px] h-[250px] gap-5'>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col text-black-100 gap-3'>
               <p className='font-lato text-xs'>Affordable cleaning solutions</p>
               <h1 className='font-outfit text-3xl font-semibold'>High-Quality and Friendly Services at Fair Prices</h1>
            </div>
             <p className='font-lato text-sm'>We provide comprehensive cleaning services tailored to your needs. From residential cleaning  services</p>
        </div>
        <CustomButton
         title='Get a quote'
         btnType='button'
         containerStyles= "text-primary-white rounded-full bg-primary-green-100 min-w-[130px] font-medium text-xs font-poppins"
         handleClick={()=>router.push('/dashboard/login')}
        />
     </div>
     
    </div>
  )
}

export default Company