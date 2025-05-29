"use client"


import React from 'react'
import CustomButton from './CustomBotton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CompanyDetails from './CompanyDetails'

const Company = () => {

    const router = useRouter()

    const companyData = [
        { 
            id: 0,
            img: "/Frame 1310.png",
            description: "Vetted professionals"   
          },
        { 
            id: 1,
            img: "/Frame 1310.png",
            description: "Affordable Prices" 
          },
        { 
            id: 2,
            img: "/Frame 1310.png",
            description: "Next day availability"
          },
        { 
            id: 3,
            img: "/Frame 1310.png",
            description: "Best Quality"
          },
        { 
            id: 4,
            img: "/Frame 1310.png",
            description: "Standard cleaning tasks"
          },
        { 
            id: 5,
            img: "/Frame 1310.png",
            description: "Affordable Prices"
          },
    ]

  return (
    <div className='py-14 justify-between flex items-center gap-20 '>
     <div>
        <Image 
          src="/Images.png"
          alt="cleaning pics"
          height={330}
          width={400}
        />
        
     </div>
     <div className='flex flex-col justify-start w-[394px] h-[350px] gap-5'>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col text-black-100 gap-3 font-bevietnam'>
              <h1 className='text-3xl font-semibold'>Welcome To Our<br/>Pro-cleaning Company!</h1>
              <p className='text-xs text-grey-100'>We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!</p>
            </div>
            <div className='grid grid-cols-2 gap-3 gap-x-8 w-[360px] h-[120px] items-center relative font-lato'>
                {companyData.map((item)=>(
                  <CompanyDetails item={item} key={item.id} />
                ))}
            </div>
        </div>
        <div className='flex gap-5 font-lato text-sm font-medium'>
         <CustomButton
           title='Book Now'
           btnType='button'
           containerStyles= "text-primary-white rounded-md bg-primary-green-100 min-w-[130px]"
           handleClick={()=>router.push('/dashboard/login')}
          />
         <CustomButton
          title='Know More'
          btnType='button'
          containerStyles= "text-black-100 rounded-md min-w-[130px] outline outline-1"
          handleClick={()=>router.push('/dashboard/login')}
          />
         </div>
     </div>
    </div>
  )
}

export default Company