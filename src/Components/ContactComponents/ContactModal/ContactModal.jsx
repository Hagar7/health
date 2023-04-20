import React from "react";
import { useTranslation } from "react-i18next";
import style from "./ContactModal.module.scss";

export default function ContactModal() {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.contactModal}`}>
      {i18n.language === "en" && (
        <button
          type="button"
          className={`${style.myModalSmall} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal232"
        >
          COLLABORATE WITH US <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      {i18n.language === "ar" && (
        <button
          type="button"
          className={`${style.myModalSmall} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal232"
        >
          تعاون معانا <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <div
        className={`${style.modalBodySmall} modal fade`}
        id="exampleModal232"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`${style.modalDiaogSmall} modal-dialog modal-dialog-centered`}
        >
          <div className={`${style.modalContentSmall} modal-content`}>
            <div className={`${style.modalHeaderSmall} modal-header`}>
              <h1
                className={`${style.headSmall} modal-title fs-5`}
                id="exampleModalLabel"
              >
                {t("formtitle")}
              </h1>
              <button
                type="button"
                className={`${style.btnCloseSmall} btn-close`}
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
                        rows="6"
                        className="form-control my-3"
                        placeholder={t("msgPlace")}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {i18n.language === "en" && (
                <button
                  type="button"
                  className={`${style.myBtn} btn btn-primary`}
                  data-bs-dismiss="modal"
                >
                  Send <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
              {i18n.language === "ar" && (
                <button
                  type="button"
                  className={`${style.myBtn} btn btn-primary`}
                  data-bs-dismiss="modal"
                >
                  ارسال <i className="fa-solid fa-chevron-left"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
