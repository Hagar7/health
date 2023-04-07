import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./EventsGallery.module.scss";
import "swiper/css/bundle";
import EventItem from "../EventItem/EventItem";

export default function EventsGallery({ events }) {
  const [t, i18n] = useTranslation();
  

const [gallery,setGallery] = useState(null)
const [title,setTitle] = useState(null)
const openGallery = (element) => {
  setGallery(element.images)
  setTitle(element.sectionTitle)
};

  const closeGallery = () => {
    setGallery(null);
  };

  return (
    <>
            {!gallery?
             events?.map((item) => (
              <div className="row" key={item.id} >
                <div className="col-lg-4">
                  <div className={`${style.eventImg}`}>
                    <img src={item.cardImage} alt="event" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className={`${style.eventInfo}`}>
                    <h3>{item.sectionTitle}</h3>
                    <div className={`${style.eventBtn}`}>
                      <button className={`${style.one} btn btn-primary`} onClick={()=>openGallery(item)}>
                        {item.btn1Text}
                        {i18n.language === "en" && (
                          <i className="fa-solid fa-chevron-right"></i>
                        )}
                        {i18n.language === "ar" && (
                          <i className="fa-solid fa-chevron-left"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )):
      <EventItem images={gallery} closeGallery={closeGallery} events={events} title={title}/>
     }
    </>
  );
}
