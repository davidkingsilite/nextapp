import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ExpertCardProps {
  item:{
    id: number;
    img: string;
    rating: number;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
    alt: string;
    title: string;
  }
}

const Experts = ({item}: ExpertCardProps) => {
  return (
    <div className='flex flex-col h-[407px] lg:max-w-[277px] flex-1 gap-5 border-[0.75px] border-[#83A790] rounded-2xl font-bevietnam'>
      <div className=''>
        <Image
          src={item.img}
          alt={item.alt}
          width={277}
          height={225}
          className='object-contain'
         />
       </div>
       <div className='flex pl-4'>   
       {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
       </div>
      <div className='flex flex-col pl-4 font-bevietnam gap-8'>
         <div>
          <h1 className='text-lg text-black-100'>Erick Reynolds</h1>
          <p className='text-xs text-grey-100'>He is an expert cleaning staff member who provides thorough cleaning with precision,</p>
         </div>

         <div className='flex gap-2 items-center'>
         <Link href='/www.facebook.com'>
         <Image
           src={item.img3}
           alt='facebook'
           width={15}
           height={15}
           className='hover:bg-primary-green-100'
           />
           </Link>
           <Link href='/'>
          <Image
           src={item.img4}
           alt='X'
           width={15}
           height={15}
           className='hover:bg-primary-green-100'
           />
          </Link>
           
          <Link href='/'>
          <Image
           src={item.img5}
           alt='instargam'
           width={15}
           height={15}
           className='hover:bg-primary-green-100'
           />
           </Link>

           <Link href='/'>
          <Image
           src={item.img6}
           alt='discord'
           width={15}
           height={15}
           className='hover:bg-primary-green-100'
           />
           </Link>
         </div>
      </div>
    </div>
  )
}

export default Experts