import React from 'react'
import Divider from './Divider'
import Experts from './Experts'

const ExpertTeam = () => {


    const expertData = [
        { 
          id: 0,
          img: "/Image-(4).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "expert cleaner 1",
          title: "Luis Carter",
          description: "She is an expert cleaning staff member who delights in client's satisfaction."
         
        },
        { 
          id: 1,
          img: "/Image-(5).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "expert cleaner 2",
          title: "Erick Reynolds",
          description: "He is an expert cleaning staff member who provides thorough cleaning with precision."
         
        },
        { 
          id: 2,
          img: "/Image-(6).png",
          rating: 5, 
          img3: "/facebook.svg", 
          img4: "/x.svg", 
          img5: "/instagram.svg", 
          img6: "/discord.svg", 
          alt: "expert cleaner 3",
          title: "Jasmine Taylor",
          description: "She is an expert cleaning staff member who provides deep cleaning with attention to details."
         
        },
    ]
  return (
    <div className='py-7 md:py-14 font-bevietnam px-4 md:px-8 max-w-7xl mx-auto'>
        <div className='flex gap-8 sm:justify-between '>
            <h1 className='text-3xl font-semibold'>Effective Cleaning Requires <br /> an Expert Cleaning Team</h1>
            <div className='font-bevietnam flex flex-col gap-1'>
                <h1 className='text-black-100 text-[15px] font-semibold'>Expert Team</h1>
                <p className='text-xs text-grey-100'>We have professional expert cleaning staff ensuring top-<br/>notch cleanliness and hygiene for your space.</p>
            </div>
        </div>
        <Divider />
      {/* Grid*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-14'>
           {expertData.map((item)=>(
                <Experts item={item} key={item.id} />
           ))}
        </div>
    </div>
  )
}

export default ExpertTeam