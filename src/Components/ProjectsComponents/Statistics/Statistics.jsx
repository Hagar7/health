import React from 'react'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Statistics.module.scss'
import Counter from '../../HomeComponents/Counter/Counter';
import  './style.css'

export default function Statistics({statistics}) {
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className="shapeThree">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={70}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 1,
            },
            769: {
              width: 991,
              slidesPerView: 2,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
            },
          }}
        >



         {statistics?.map((item)=>
          <SwiperSlide key={item.id}>
          <div className="shapeContainer">
            <div className="counter">
              <Counter end={3000} start={0} timer={50} />
            </div>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
          </div> 
        </SwiperSlide>
         )}
         
          {/* <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={5732} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Number of Patients Aided 2020</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={61} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Total Hospital Equipment 2020</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={5989343} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Total Donations 2020</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={720} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Number of Patients aided 2019</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={3} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Total Hospital Equipment 2019</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={800} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Total Consumables 2019</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shapeContainer">
              <div className="counter">
                <Counter end={974792} start={0} timer={50} />
              </div>
              <div className="title">
                <h3>Total Donations 2019</h3>
              </div>
            </div>
          </SwiperSlide> */}




        </Swiper>
      </div>
    </div>
  </div>
  )
}
