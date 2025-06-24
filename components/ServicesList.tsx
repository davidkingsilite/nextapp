

'use client';

import React, { useRef, useState } from 'react';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServicesList = () => {

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);


  const itemData = [
    {
      id: 0,
      img: '/Image.png',
      alt: 'clay sculpture',
      title: 'Office Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
    {
      id: 1,
      img: '/Image (1).png',
      alt: 'clay sculpture',
      title: 'Spring Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
    {
      id: 2,
      img: '/Image (2).png',
      alt: 'clay sculpture',
      title: 'House Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
    {
      id: 3,
      img: '/Image (2).png',
      alt: 'clay sculpture',
      title: 'House Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
    {
      id: 4,
      img: '/Image (2).png',
      alt: 'clay sculpture',
      title: 'House Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
    {
      id: 5,
      img: '/Image (2).png',
      alt: 'clay sculpture',
      title: 'House Cleaning',
      description:
        'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
    },
  ];

  const handleSwiperChange = () => {
    if (!swiperRef.current) return;

    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  };


  return (
    <div className="relative max-w-7xl mx-auto">
    
      {/* Custom Arrows */}
      <div className="relative">
      <button
          className={`custom-prev absolute top-1/3 -left-6 -translate-y-1/2 z-10 p-2 rounded-full shadow ${
            isBeginning ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
          disabled={isBeginning}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <button
          className={`custom-next absolute top-1/3 -right-6 -translate-y-1/2 z-10 p-2 rounded-full shadow ${
            isEnd ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
          disabled={isEnd}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>

     
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSwiperChange}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="p-5 flex justify-center items-center"
      >
        {itemData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full flex justify-center items-center p-4">
              <Services item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default ServicesList;

