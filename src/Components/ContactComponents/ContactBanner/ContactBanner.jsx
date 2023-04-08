import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './ContactBanner.module.scss'

export default function ContactBanner() {
    const aboutImg = "images/banner-about1.jpg"

const [t, i18n] = useTranslation();
  return (
    <div className={`${style.banner}`} style={{backgroundImage:`url(${aboutImg})`}} >
    <div className={`${style.overlay}`}>
      <div className={`${style.bannerContainer} container`}>
       <h3>{t('contactmenu')}</h3>
      </div>
      </div>
  </div>
  )
}
