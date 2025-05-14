"use client"

import { navbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomBotton'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router = useRouter()

  return (
    <header className='w-full z-10'>
        <nav className=' max-w-[1440px] mx-auto flex justify-between items-center py-6 px-24'>
            <Link href="/" className='flex justify-center items-center gap-1'>
                 <Image
                   src='/cleaning_broom.png'
                   alt='Cleaning logo'
                   width={22}
                   height={36}
                   />
                   <div className='flex flex-col justify-center items-center text-left'>
                    <h1 className='font-bevietnam font-extrabold text-[18px]'><span className='text-primary-green-100'>PRO</span><span className='text-black-100'>Cleaning</span></h1>
                    <h6 className='text-grey font-Be_Vietnam_Pro text-[10px]'>cleaning services company</h6>
                   </div>
            </Link>
            <div className="flex gap-4 items-center justify-between">
              {navbarLinks.map((link)=> (
             <Link href={link.url} className='text-grey hover:text-primary-green-100' key={link.id}>{link.title}</Link>
               ))}
           </div>
           <CustomButton 
             title ="Get a qoute"
             btnType="button"
             containerStyles= "text-primary-white rounded-full bg-primary-green-100 min-w-[130px] font-medium text-xs font-poppins"
             handleClick={()=>router.push('/dashboard/login')}
           />
        </nav>  
    </header>
  )
}

export default Navbar