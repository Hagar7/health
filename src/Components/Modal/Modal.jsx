import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Modal.module.scss";

export default function Modal() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainModal}`}>
        {i18n.language === 'en' &&
      <button
        type="button"
        className={`${style.myModal} btn btn-primary`}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        COLLABORATE WITH US <i className="fa-solid fa-chevron-right"></i>
      </button>
        }
        {i18n.language === 'ar' &&
        <button
        type="button"
        className={`${style.myModal} btn btn-primary`}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        تعاون معانا  <i className="fa-solid fa-chevron-left"></i>
      </button>
        }

      <div
        className={`${style.modalBody} modal fade modal-lg`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className={`${style.modalDiaog} modal-dialog modal-dialog-centered`}>
          <div className={`${style.modalContent} modal-content`}>
            <div className={`${style.modalHeader} modal-header`}>
              <h1
                className={`${style.head} modal-title fs-5`}
                id="staticBackdropLabel"
              >
                {t("formtitle")}
              </h1>
              <button
                type="button"
                className={`${style.btnClose} btn-close`}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${style.inputData}  `}>
                      <input
                        type="text"
                        name="name"
                        className="form-control "
                        placeholder={t("namePlace")}
                      />
                    </div>
                    <div className={`${style.inputData}  `}>
                      <input
                        type="number"
                        name="age"
                        className="form-control my-3 "
                        placeholder={t("ageplace")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.inputData}  `}>
                      <select className="form-control ">
                        <option value="default">{t("selectplace")}</option>
                        <option value="male">{t("maleplace")}</option>
                        <option value="female">{t("femaleplace")}</option>
                      </select>
                    </div>
                    <div className={`${style.inputData}  `}>
                      <input
                        type="text"
                        name="phone"
                        className="form-control my-3 "
                        placeholder={t("phonePlace")}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className={`${style.inputData}  `}>
                      <input
                        type="email"
                        name="email"
                        className="form-control my-3 "
                        placeholder={t("emailPlace")}
                      />
                    </div>
                    <div className={`${style.inputData}  `}>
                      <textarea
                        name="message"
                        cols="30"
                        rows="8"
                        className="form-control my-3"
                        placeholder={t("msgPlace")}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={`${style.modalFooter} modal-footer`}>
                {i18n.language === 'en' &&
                 <button
                 type="submit"
                 data-bs-dismiss="modal"
                 className={`${style.myBtn} btn btn-primary`}
               >
                 Send <i className="fa-solid fa-chevron-right"></i>
               </button>}
               {i18n.language === 'ar' &&
                 <button
                 type="submit"
                 data-bs-dismiss="modal"
                 className={`${style.myBtn} btn btn-primary`}
               >
                 ارسال <i className="fa-solid fa-chevron-left"></i>
               </button>}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
