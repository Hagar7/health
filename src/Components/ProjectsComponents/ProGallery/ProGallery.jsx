import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from './ProGallery.module.scss'
import { useTranslation } from 'react-i18next';
import './ProGallery.css'

export default function ProGallery({gallery}) {
    const [open, setOpen] = useState(false);
    console.log(gallery);
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.ProGallery}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("album")}</h2>
        </div>

        <div className="galleryImg">
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
        {gallery?.map((item, index) => (
          <SwiperSlide onClick={() => setOpen(true)} key={index}>
            <img src={item} alt="journey" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={gallery?.map((image) => {
          return { src: image };
        })}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
        </div>
        </div>
  )
}
