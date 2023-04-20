import React from 'react'
import style from './Form.module.scss'
import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm/ContactForm';

export default function Form() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("help")}</h2>
      </div>
     <ContactForm/>
      </div>
      </div>
  )
}
