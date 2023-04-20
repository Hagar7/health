import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function ProjectImage({ images}) {
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation();
  const [index, setIndex] = useState(0);
  return (
    <div className="proImg">
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
        991: {
          slidesPerView: 2,
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
        {images?.map((item, index) => (
          <SwiperSlide onClick={() => setOpen(true)} key={index}>
            <img src={item} alt="journey" onClick={() => setIndex(index)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
      index={index}
        open={open}
        close={() => setOpen(false)}
        slides={images?.map((image) => {
          return { src: image };
        })}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
}
