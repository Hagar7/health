import React, { useState } from 'react'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Team.module.scss'
import './Team.css'
import { useTranslation } from 'react-i18next';

export default function Team({board}) {
    let [mypop, setmypop] = useState({
        popup1Title:"",
        popup2Desc:"",
        popup1Desc:"",
    });

    const [t, i18n] = useTranslation();
    const getInfo = (element) => {
        setmypop(element)
      };
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("board")}</h2>
      </div>
      <div className="shapeSeven">
      <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={70}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              767: {
                width: 767,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView:2,
              },
              1280: {
                width: 1280,
                slidesPerView: 3,
              },
            }}
          >
            {board?.map((item)=>
              <SwiperSlide key={item.id} data-bs-toggle="modal" data-bs-target="#exampleModal8" onClick={() => getInfo(item)}>
              <div className="shapeContainer">
                <div className="img">
                  <img
                    src={item.profile}
                    alt={item.title}
                  />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                  <h4>{item.position}</h4>
                </div>
              </div>
            </SwiperSlide>
            )}
          </Swiper>
      </div>
                {/* modal */}
                <div className={`${style.mainModal}`}>
<div
  className={`${style.modalBody} modal fade`}
  id="exampleModal8"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div
    className={`${style.modalDiaog} modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl`}
  >
    <div className={`${style.modalContent} modal-content`}>
      <div className={`${style.modalInfo} modal-body`}>
        <div className={`${style.modalPara}`}>
        {mypop.popup1Title? <h4>{mypop.popup1Title}</h4>:""}
        {mypop.popup1Desc?<span>{mypop.popup1Desc}</span>:""}
        {mypop.popup2Desc?<p>{mypop.popup2Desc}</p>:""}
        </div>
        <div className={`${style.modalClosed}`}>
          <i
            className={`${style.btnClose} fa-solid fa-xmark `}
            data-bs-dismiss="modal"
            aria-label="Close"
          ></i>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
      </div>
  )
}
