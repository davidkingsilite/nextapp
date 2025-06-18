import React from 'react'
import Divider from './Divider'
import Experts from './Experts'

const ExpertTeam = () => {


    const expertData = [
        { 
          id: 0,
          img: "/Image (4).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "clay sculpture",
          title: "Office Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
         
        },
        { 
          id: 1,
          img: "/Image (5).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "clay sculpture",
          title: "Office Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
         
        },
        { 
          id: 2,
          img: "/Image (6).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "clay sculpture",
          title: "Office Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
         
        },
    ]
  return (
    <div className='py-14 font-bevietnam'>
        <div className='flex justify-between'>
            <h1 className='font-bevietnam text-3xl font-semibold'>Effective Cleaning Requires <br /> an Expert Cleaning Team</h1>
            <div className='font-bevietnam flex flex-col gap-1'>
                <h1 className='text-black-100 text-[15px] font-semibold'>Expert Team</h1>
                <p className='text-xs text-grey-100'>We have professional expert cleaning staff ensuring top-<br/>notch cleanliness and hygiene for your space.</p>
            </div>
        </div>
        <Divider />
        <div className='grid grid-cols-3 w-full gap-5 xl:gap-24 justify-center items-center max-w-[1440px] relative'>
           {expertData.map((item)=>(
                <Experts item={item} key={item.id} />
           ))}
        </div>
    </div>
  )
}

export default ExpertTeam