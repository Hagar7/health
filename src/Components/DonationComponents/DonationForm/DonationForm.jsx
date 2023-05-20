import React from 'react'
import style from './DonationForm.module.scss'
import { useTranslation } from 'react-i18next';
import MainDonation from '../MainDonation/MainDonation';
// import ContactForm from ''';

export default function DonationForm() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("donation")}</h2>
      </div>
      <MainDonation/>
      </div>
      </div>
  )
}
