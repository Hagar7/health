import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./ProGallery.module.scss";
import { useTranslation } from "react-i18next";
import "./ProGallery.css";

export default function ProGallery({ gallery }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.ProGallery}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("album")}</h2>
        </div>

        <div className="galleryImg">
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
            {gallery?.map((item, index) => (
              <SwiperSlide onClick={() => setOpen(true)} key={index}>
                <img src={item} alt="project" onClick={() => setIndex(index)} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Lightbox
            index={index}
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
  );
}
