import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomBotton';

interface ServicesProps {
  item:{
    id: number;
    img: string;
    img2: string;
    img3: string;
    alt: string;
    title: string;
    description: string;
  }
}


const Services =({item}: ServicesProps) => {
  return (
    <div className='flex flex-col flex-1 gap-5 max-w-[350px]'>
       <Image
       src={item.img}
       alt='Service Image'
       width={350}
       height={250}
       priority
       className='object-contain'
        />
      <div className='flex flex-col font-bevietnam '>
        <h3 className='font-semibold text-black-100 text-lg '>{item.title}</h3>
        <p className='text-grey-100 text-xs flex text-left text-wrap justify-center'>{item.description}</p>
        <div className='flex mt-5 items-start'>
        <CustomButton
          title='Book Now'
          btnType='button'
          containerStyles= "hover:text-primary-white rounded-[4.5px] text-black-100 hover:bg-primary-green-100 min-w-[130px] outline outline-1"
          rightIcon="/Arrow.svg"
          />
          </div>
      </div>
      
    </div>
  )
}

export default Services