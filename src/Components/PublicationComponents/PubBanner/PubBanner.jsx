import React from 'react'
import style from './PubBanner.module.scss'
import { useTranslation } from 'react-i18next';

export default function PubBanner({banner}) {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.banner}`} style={{backgroundImage:`url(${banner?.image})`}}  >
    <div className={`${style.overlay}`}>
      <div className={`${style.bannerContainer} container`}>
       <h3>{t('pubMenu')}</h3>
      </div>
      </div>
  </div>
  )
}
