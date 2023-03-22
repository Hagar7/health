import React from 'react'
import {   Pagination,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"
import style from './HomeFacts.module.scss'
import './HomeFacts.css'
import Counter from '../Counter/Counter';
import { useTranslation } from 'react-i18next';

export default function HomeFacts({facts}) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainFacts}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t('factsTitle')}</h2>
      </div>
      <div className="shapeOne">
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={70}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 1,
                  },
                  769: {
                    width: 991,
                    slidesPerView: 2,
                    spaceBetween:70
                  },
                  1280: {
                    width: 1280,
                    slidesPerView: 3,
                    spaceBetween:70
                  },
            }}
         
          >
         {facts?.map((item)=>
          <SwiperSlide key={item.id}>
          <div className="shapeContainer">
                <div className="counter">
                  <Counter end={item.count} start={0} timer={50}/>
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                </div>
              </SwiperSlide>
         )}
              {/* <div className="prev" />
           <div className="next" /> */}
          </Swiper>
      </div>
    </div>
  </div>
  )
}
