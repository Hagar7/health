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
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          768: {
            width: 768,
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          769: {
            width: 769,
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1280: {
            width: 1280,
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
            <img src={image} alt="event" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={opengallery}
        close={() => setOpenGallery(false)}
        slides={images?.map((image) => {
          return { src: image };
        })}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
}
