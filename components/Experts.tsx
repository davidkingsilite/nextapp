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
    description: string;
    
  }
}

const Experts = ({item}: ExpertCardProps) => {
  return (
    <div className='flex flex-col h-[380px] lg:max-w-[277px] flex-1 gap-2 md:gap-5 border-[0.75px] border-[#83A790] rounded-2xl font-bevietnam'>
      <div className='w-full h-4/5 overflow-hidden rounded-t-2xl'>
        <Image
          src={item.img}
          alt={item.alt}
          width={250}
          height={200}
          placeholder='blur'
          blurDataURL='blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBmMGYwIi8+"
           '
          className='w-full -h-3/4 object-cover'
         />
       </div>
       <div className='flex pl-4'>   
       {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
       </div>
      <div className='flex flex-col pl-4 font-bevietnam gap-2 md:gap-8'>
         <div>
          <h1 className='text-lg text-black-100 font-semibold'>{item.title}</h1>
          <p className='text-xs text-grey-100'>{item.description}</p>
         </div>

         <div className='flex gap-2 items-center'>
         <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
         <Image
           src={item.img3}
           alt='facebook'
           width={15}
           height={15}
           className='hover:bg-primary-green-100 p-1 rounded-full transition h-8 w-8'
           />
           </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image
           src={item.img4}
           alt='X'
           width={15}
           height={15}
           className='hover:bg-primary-green-100 p-1 rounded-full transition h-8 w-8'
           />
          </Link>      
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
           src={item.img5}
           alt='instargam'
           width={15}
           height={15}
           className='hover:bg-primary-green-100 p-1 rounded-full transition h-8 w-8'
           />
           </Link>
           <Link href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
          <Image
           src={item.img6}
           alt='discord'
           width={15}
           height={15}
           className='hover:bg-primary-green-100 p-1 rounded-full transition h-8 w-8'
           />
           </Link>
         </div>
      </div>
    </div>
  )
}

export default Experts