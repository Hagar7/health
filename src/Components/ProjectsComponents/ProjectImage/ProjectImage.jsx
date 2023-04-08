import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

export default function ProjectImage({ images}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="proImg">
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
        {images?.map((item, index) => (
          <SwiperSlide onClick={() => setOpen(true)} key={index}>
            <img src={item} alt="journey" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
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
