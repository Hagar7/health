import React from 'react'
import style from './AboutCover.module.scss'
import { useTranslation } from 'react-i18next';

export default function AboutCover({establishment}) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.cover}`} style={{backgroundImage:`url(${establishment?.background})`}}>
    <div className={`${style.overlay}`}>
        <div className={`${style.caption}`}>
        <h4>{establishment?.sectionTitle}</h4>
        <p>{establishment?.description}</p>
        <a
              href={establishment?.btn0Link}
              target={"_blank"} rel="noreferrer"
              className={`${style.one} btn btn-primary`}
            >
              {establishment?.btn1Text}
              {i18n.language === "en" &&
           <i className="fa-solid fa-chevron-right"></i> 
          }
          {i18n.language === "ar" &&
           <i className="fa-solid fa-chevron-left"></i> 
          }
            </a>
        </div>

    </div>
</div>
  )
}
