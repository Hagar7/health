import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import style from "./HomeActivity.module.scss";
import "./HomeActivity.css";
import { useTranslation } from "react-i18next";

export default function HomeActivity({ activites }) {
  const [t, i18n] = useTranslation();

  let [mytitle, setInfo] = useState({
    title:"",
    popupDesc:""
  }
  );

  let getData = (element) => {
    setInfo(element);
  };

  return (
    <div className={`${style.main}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("activityTitle")}</h2>
        </div>
        <div className="shapeTwo">
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={40}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                width: 768,
                slidesPerView: 1,
              },
              991: {
                width: 991,
                slidesPerView: 1,
              },
              1280: {
                width: 1280,
                slidesPerView: 2,
              },
            }}
          >
            {activites?.cards.map((item) => (
              <SwiperSlide key={item.id}>
                <img alt="activity" src={item.profile} />
                <h4>{item.title}</h4>
                <button
                  className="btn btn-primary Btony"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  onClick={() => getData(item)}
                >
                  {t("buttonLearn")}
                  {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                          {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`${style.modalActivity} modal fade modal-xl`}
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className={`${style.contentActivity} modal-content`}>
              <div className={`${style.headerActivity} modal-header`}>
                <i
                  className="fa-solid fa-xmark "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></i>
              </div>
              <h1 className="modal-title" id="exampleModalLabel">
                {mytitle.title}
              </h1>
              <div className="modal-body">
                <p>
               {mytitle.popupDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
