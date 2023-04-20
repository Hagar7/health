import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './ContactBanner.module.scss'

export default function ContactBanner({banner}) {
    
const [t, i18n] = useTranslation();
  return (
    <div className={`${style.banner}`} style={{backgroundImage:`url(${banner?.image})`}} >
    <div className={`${style.overlay}`}>
      <div className={`${style.bannerContainer} container`}>
       <h3>{t('contactmenu')}</h3>
      </div>
      </div>
  </div>
  )
}
