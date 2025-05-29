import Image from 'next/image';
import React from 'react'

interface CompanyCardProps {
    item:{
      id: number;
      img: string;
      description: string;
    }
  }

const CompanyDetails = ({item}: CompanyCardProps) => {
  return (
    <div className='flex gap-[6px] w-[161px] h-[27px] px-[8px] py-[8px] items-center semi-bold text-xs bg-[#F5F4F4]'>
        <Image 
        src={item.img}
        alt='icon'
        width={12}
        height={12}
        />
        <p>{item.description}</p>
    </div>
  )
}

export default CompanyDetails