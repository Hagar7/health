import React from 'react'
import style from './Donation.module.scss'
import { useTranslation } from 'react-i18next';

export default function Donation() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.donateForm}  `}>
    <form>
    <div className="row">   
      <div className="col-md-12">
      <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="name"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("namePlace")}
          />
        </div>
      </div>
      <div className="col-md-12">
      <div className={`${style.inputData}  `}>
          <input
            type="email"
            name="email"
            className={`${style.Cntrols} form-control`}
            placeholder={t("emailPlace")}
          />
        </div>
      </div>
      <div className="col-md-12">
      <div className={`${style.inputData} `}>
          <select className={`${style.Cntrols} form-control my-3`}>
            <option value="EGP">{t("egp")}</option>
            <option value="USD">{t("usd")}</option>
          </select>
        </div> 
      </div>
      <div className="col-md-12">
      <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="amount"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("amount")}
          />
        </div>
      </div>
    </div>
    <div className={`${style.formBtns}`}>
    {i18n.language === 'en' &&
              <button
              type="button"
              className={`${style.myBtn} btn btn-primary`}
              data-bs-dismiss="modal"
            >
              Donation <i className="fa-solid fa-chevron-right"></i>
            </button>
              }
              {i18n.language === "ar" &&
              <button
              type="button"
              className={`${style.myBtn} btn btn-primary`}
              data-bs-dismiss="modal"
            >
              اتبرع<i className="fa-solid fa-chevron-left"></i>
            </button>}
    </div>
  </form>
    </div>
  )
}
