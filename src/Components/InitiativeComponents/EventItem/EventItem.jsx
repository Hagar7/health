import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import style from "./EventItem.module.scss";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function EventItem({ images, closeGallery,title}) {
  const [opengallery, setOpenGallery] = useState(false);
  const [t, i18n] = useTranslation();
  const [index, setIndex] = useState(0);
  return (
    <div className="PhotoImg">
      <button className={`${style.one} btn btn-primary`} onClick={closeGallery}>
        {t("back")}
        {i18n.language === "en" && (
          <i className="fa-solid fa-chevron-right"></i>
        )}
        {i18n.language === "ar" && <i className="fa-solid fa-chevron-left"></i>}
      </button>
      <h3>{title}</h3>
      <Swiper
      key={i18n.dir()}
      breakpoints={{
        360: {
          slidesPerView: 1,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        768: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        769: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1024: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1280: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1380: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} onClick={() => setOpenGallery(true)}>
            <img src={image} alt="event" onClick={() => setIndex(index)}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={opengallery}
        index={index}
        close={() => setOpenGallery(false)}
        slides={images?.map((image,index) => {
          return { src: image,key: index};
        })}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
}
