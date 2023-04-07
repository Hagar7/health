import React from 'react'
import style from './MainProjectsPage.module.scss'
import { useTranslation } from 'react-i18next';

export default function MainProjectsPage({thengo}) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("ngo")}</h2>
      </div>
      <div className={`${style.info}`}>
        {thengo?.title1?<h4>{thengo?.title1}</h4>:""}
        <span>{thengo?.title2}</span>
        <p>{thengo?.desc1}</p>
        <p>{thengo?.desc2}</p>
        {thengo?.desc3?<p>{thengo?.desc3}</p>:""}
        <span>{thengo?.title3}</span>
        <p>{thengo?.desc4}</p>
        <span>{thengo?.title4}</span>
        <p>{thengo?.desc5}</p>

      </div>
    </div>
  </div>
  )
}
