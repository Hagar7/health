import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./HomeFacts.module.scss";
import "./HomeFacts.css";
import Counter from "../Counter/Counter";
import "swiper/css/bundle";
import { useTranslation } from "react-i18next";

export default function HomeFacts({ facts }) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainFacts}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("factsTitle")}</h2>
        </div>
        <div className="shapeOne">
            <Swiper
    key={i18n.dir()}
    modules={[Navigation, Pagination]}
    navigation={true}
    pagination={{
    clickable: true,
    }}
    breakpoints={{
      280: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
        
      },
      1024:{
        slidesPerView: 1,
      },
      1280: {
        slidesPerView: 2,
      },
      1380: {
        slidesPerView: 3,
      },
    }}
  >
    {facts?.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="mainSwiper">
        <div className="shapeContainer">
          <div className="counter">
            {item.unit ? <h6>{item.unit}</h6> : ""}
            <Counter end={item.count} start={0} timer={50} />
          </div>
          <div className="title">
            <h3>{item.title}</h3>
          </div>
        </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
        </div>
      </div>
    </div>
  );
}
