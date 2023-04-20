import React, { useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import style from "./Partners.module.scss";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function Partners({ Partners }) {
  const [t, i18n] = useTranslation();
  let [mypop, setmypop] = useState({
    popup1Desc: "",
    popup2Title: "",
    popup2Desc: "",
    popup3Title: "",
    popup3Desc: "",
    popup4Title: "",
    popup4Desc: "",
    popup5Desc: "",
    popup6Desc: "",
    popup7Desc: "",
    title: "",
    popupDesc: "",
  });

  const getInfo = (element) => {
    setmypop(element);
  };
  return (
    <div className={`${style.main}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("partner")}</h2>
        </div>
        <div className="shapeSix">
          <Swiper
            key={i18n.dir()}
            modules={[Navigation, Pagination]}
            spaceBetween={70}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 1,
              },
              769: {
                width: 769,
                slidesPerView: 1,
              },
              991: {
                width: 991,
                slidesPerView: 1,
              },
              1024: {
                width: 1024,
                slidesPerView: 1,
              },
              1280: {
                width: 1280,
                slidesPerView: 2,
              },
              1380: {
                width: 1380,
                slidesPerView: 3,
              },
            }}
          >
            {Partners?.map((item) => (
              <div key={item.id}>
                <SwiperSlide key={item.id}>
                  <div
                    className="shapeContainer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal7"
                    onClick={() => getInfo(item)}
                  >
                    <div className="img">
                      <img src={item.profile} alt="partners" />
                    </div>
                    <div className="title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        {/* modal */}
        <div className={`${style.mainModal}`}>
          <div
            className={`${style.modalBody} modal fade`}
            id="exampleModal7"
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
                    {mypop.title ? <h4>{mypop.title}</h4> : ""}
                    {mypop.popup1Desc ? <span>{mypop.popup1Desc}</span> : ""}
                    {mypop.popup2Title ? <h6>{mypop.popup2Title}</h6> : ""}
                    {mypop.popup2Desc ? <h5>{mypop.popup2Desc}</h5> : ""}
                    {mypop.popup3Desc ? <span>{mypop.popup3Desc}</span> : ""}
                    {mypop.popup4Desc ? <h5>{mypop.popup4Desc}</h5> : ""}
                    {mypop.popup3Title ? <h6>{mypop.popup3Title}</h6> : ""}
                    {mypop.popup6Desc ? <span>{mypop.popup6Desc}</span> : ""}
                    {mypop.popup4Title ? <h6>{mypop.popup4Title}</h6> : ""}
                    {mypop.popup7Desc ? <span>{mypop.popup7Desc}</span> : ""}
                    {mypop.popupDesc ? <span>{mypop.popupDesc}</span> : ""}
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
  );
}
