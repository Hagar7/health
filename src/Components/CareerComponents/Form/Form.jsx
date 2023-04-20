import React from 'react'
import style from './Form.module.scss'
import { useTranslation } from 'react-i18next';

export default function Form() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.volunterForm}  `}>
    <form>
    <div className="row">
      <div className="col-md-6">
        <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="name"
            className={`${style.Cntrols} form-control`}
            placeholder={t("namePlace")}
          />
        </div>
        <div className={`${style.inputData}  `}>
          <input
            type="number"
            name="age"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("ageplace")}
          />
        </div>
        <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="education"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("Education")}
          />
        </div>
        <div className={`${style.inputData}  `}>
          <input
            type="email"
            name="email"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("emailPlace")}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className={`${style.inputData} `}>
          <select className={`${style.Cntrols} form-control`}>
            <option value="male">{t("maleplace")}</option>
            <option value="female">{t("femaleplace")}</option>
          </select>
        </div>
        <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="phone"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("phonePlace")}
          />
        </div>
        <div className={`${style.inputData}  `}>
          <input
            type="text"
            name="prevousWork"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("prev")}
          />
        </div>
      </div>



      <div className="col-md-12">
        <div className={`${style.inputData}  `}>
          <textarea
            name="message"
            cols="30"
            rows="8"
            className={`${style.Cntrols} form-control my-3`}
            placeholder={t("volunterMsg")}
          ></textarea>
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
              Send <i className="fa-solid fa-chevron-right"></i>
            </button>
              }
              {i18n.language === "ar" &&
              <button
              type="button"
              className={`${style.myBtn} btn btn-primary`}
              data-bs-dismiss="modal"
            >
              ارسال <i className="fa-solid fa-chevron-left"></i>
            </button>}
    </div>
  </form>
    </div>
  )
}
