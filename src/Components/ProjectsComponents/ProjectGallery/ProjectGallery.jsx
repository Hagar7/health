import React, { useState } from 'react'
import { Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from './ProjectGallery.module.scss'
import './style.css'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

export default function ProjectGallery({gallery}) {
    const [open, setOpen] = useState(false);
  return (
    <div className={`${style.mainGallery}`}>
    <div className="container">
    <div className={`${style.head}`}>
          <h2>GALLERY</h2>
        </div>
      <div className={`${style.galleryInfo}`}>
        <div
          className={`${style.galleryTabs} nav nav-tabs`}
          id="myTab"
          role="tablist"
        >
          <div className={`${style.right}`}>
            <button
              className={`${style.navGallery} nav-link active`}
              id="gallery-tab"
              data-bs-toggle="tab"
              data-bs-target="#gallery-tab-pane"
              type="button"
              role="tab"
              aria-controls="gallery-tab-pane"
              aria-selected="true"
            >
             PHOTOS
            </button>
          </div>
          <div className={`${style.left}`}>
            <button
              className={`${style.navGallery} nav-link`}
              id="video-tab"
              data-bs-toggle="tab"
              data-bs-target="#video-tab-pane"
              type="button"
              role="tab"
              aria-controls="video-tab-pane"
              aria-selected="false"
            >
              Videos
            </button>
          </div>
        </div>

        <div className={`${style.tabContent} tab-content`} id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="gallery-tab-pane"
            role="tabpanel"
            aria-labelledby="gallery-tab"
            tabIndex={0}
          >
            <div className="container">
              <div className={`${style.galleyContent}`}>
          <div className="proImg">
                  <Swiper
                    breakpoints={{
                      360: {
                        width: 360,
                        slidesPerView: 1,
                        grid:{
                            rows:2,
                            fill: "row",
                          }
                      },
                      768: {
                        width: 768,
                        slidesPerView: 1,
                        grid:{
                            rows:2,
                            fill: "row",
                          }
                      },
                      769: {
                        width: 769,
                        slidesPerView: 1,
                        grid:{
                            rows:2,
                            fill: "row",
                          }
                      },
                      1280: {
                        width: 1280,
                        slidesPerView: 3,
                        grid:{
                            rows:2,
                            fill: "row",
                          }
                      },
                    }}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Grid, Pagination,Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image1} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image2} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image3} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image4} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image5} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image6} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image7} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image8} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image9} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image10} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image11} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image12} alt="journey" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setOpen(true)}>
                      <img src={gallery?.image13} alt="journey" />
                    </SwiperSlide>
                  </Swiper>


                  
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: `${gallery?.image1}`},
          { src: `${gallery?.image2}` },
          { src: `${gallery?.image3}` },
          { src: `${gallery?.image4}` },
          { src: `${gallery?.image5}` },
          { src: `${gallery?.image6}` },
          { src: `${gallery?.image7}` },
          { src: `${gallery?.image8}` },
          { src: `${gallery?.image9}` },
          { src: `${gallery?.image10}` },
          { src: `${gallery?.image11}` },
          { src: `${gallery?.image12}` },
          { src: `${gallery?.image13}` },

        ]}
        plugins={[Fullscreen, Slideshow]}
        
     />

                  
                </div>
              </div>
            </div>
          </div>

















          <div
            className={`${style.myVideo} tab-pane fade`}
            id="video-tab-pane"
            role="tabpanel"
            aria-labelledby="video-tab"
            tabIndex={0}
          >
            <p>events</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
