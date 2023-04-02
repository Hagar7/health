import React from "react";
import {   Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"
import style from "./Slider.module.scss";
import { Link } from "react-router-dom";
import  './Slider.css'
import { useTranslation } from "react-i18next";
export default function Slider({ slider }) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.myheader}`}>
      <div className="shapeheader">
        <Swiper 
          modules={[Pagination]}
          pagination={{ clickable: true }}
          allowTouchMove={false}
        >
          {(slider?.slides || []).map((item) => (
          <SwiperSlide key={item?.id}  >
              <div
                className="bgimg"
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <div className="overlay">
                  <div className="caption">
                    <h2>{item.header}</h2>
                    <p>{item.description}</p>
                  <div className="btns">
                    {item.btn1Text?
                    <Link to="about">
                    {" "}
                    <button className= "btn btn-primary one">
                        {(item.btn1Text)}
                        {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                         {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
                    </button>
                  </Link>:""
                    }
                    {item.btn2Text?
                      <Link to="initiative"><button className="btn btn-primary two">
                      {(item.btn2Text)}
                      {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                         {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
                </button>
                </Link>:""}
                   
                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
