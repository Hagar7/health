import React from 'react'
import style from './CareerBanner.module.scss'
import { useTranslation } from 'react-i18next';

export default function CareerBanner() {
    const aboutImg = "images/banner-about1.jpg"

const [t, i18n] = useTranslation();
  return (
    <div className={`${style.banner}`} style={{backgroundImage:`url(${aboutImg})`}} >
    <div className={`${style.overlay}`}>
      <div className={`${style.bannerContainer} container`}>
       <h3>{t('carrerMenu')}</h3>
      </div>
      </div>
  </div>
  )
}
