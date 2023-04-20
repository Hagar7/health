import React from 'react'
import style from './CareerForm.module.scss'
import { useTranslation } from 'react-i18next';
import Form from '../Form/Form';

export default function CareerForm() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("volunter")}</h2>
      </div>
      <Form/>
      </div>
      </div>
  )
}
