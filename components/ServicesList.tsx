import React from 'react'
import Services from './Services'

const ServicesList = () => {

    const itemData = [
        { 
          id: 0,
          img: "/Image.png",
          img2: "/Vector (1).svg", 
          img3: "/login.svg", 
          alt: "clay sculpture",
          title: "Office Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
         
        },
          {
          id: 1,  
          img: "/Image (1).png",
          img2: "/Vector (1).svg", 
          img3: "/login.svg", 
          alt: "clay sculpture",
          title: "Spring Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"

         
        },
          {
          id: 2,  
          img: "/Image (2).png",
          img2: "/Vector (1).svg", 
          img3: "/login.svg", 
          alt: "clay sculpture",
          title: "House Cleaning",
          description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"

        },
        //   {
        //   id: 3,
        //   img: "/Rectangle 2545.png",
        //   img2: "/Vector (1).svg", 
        //   img3: "/login.svg", 
        //   alt: "clay sculpture",
        //   title: "",
         
        // },
        //   {
        //   id: 4,  
        //   img: "/Rectangle 2547.png",
        //   img2: "/Vector (1).svg", 
        //   img3: "/login.svg", 
        //   alt: "clay sculpture",
        //   title: "",
         
        // },
        //   {
        //   id: 5,  
        //   img: "/Rectangle 2551.png",
        //   img2: "/Vector (1).svg", 
        //   img3: "/login.svg", 
        //   alt: "clay sculpture",
        //   title: "",
         
        // }, 
      ]

  return (
    <div className='grid grid-cols-3 w-full gap-5 pt-14 justify-center items-center max-w-fit'>
        {itemData.map((item)=>(
                <Services item={item} key={item.id} />
      
                 ))}
    </div>
  )
}

export default ServicesList