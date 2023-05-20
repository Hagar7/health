import React from 'react'
import style from './HomeDonation.module.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HomeDonation() {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.HomeDon}`}>
        <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("donation")}</h2>
          <Link to="donation">
            <button className={`${style.two} btn btn-primary`}>
            {t("view")} 
            {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                          {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
            </button>
          </Link>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 ">
            <div className={`${style.wrap} row g-0`}>
              <div className="col-lg-6">
                <div className={`${style.content}`}>
                  <h4>{t("money")}</h4>
                  <p>
                  {t("lorem")}
                  </p>
                  <div className={`${style.btns}`}>
                    <button
                      className={`${style.one} btn btn-primary`}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal0077"
                    >
                      {t("donateNow")}
                      {i18n.language === "en" && (
                        <i className="fa-solid fa-chevron-right"></i>
                      )}
                      {i18n.language === "ar" && (
                        <i className="fa-solid fa-chevron-left"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-lg-block d-none">
                <div className={`${style.item}`}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
          <div className={`${style.wrap} row g-0`}>
              <div className="col-lg-6">
                <div className={`${style.content}`}>
                  <h4>{t("money")}</h4>
                  <p>
                  {t("lorem")}
                  </p>
                  <div className={`${style.btns}`}>
                    <button
                      className={`${style.one} btn btn-primary`}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal0077"
                    >
                      {t("donateNow")}
                      {i18n.language === "en" && (
                        <i className="fa-solid fa-chevron-right"></i>
                      )}
                      {i18n.language === "ar" && (
                        <i className="fa-solid fa-chevron-left"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-lg-block d-none ">
                <div className={`${style.item}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.divyflex} text-center`}>
          <Link to="donation">
            <button className={`${style.btnflex} btn btn-primary`}>
            {t("view")}
            {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                          {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
            </button>
          </Link>
        </div>
         {/* modal */}
         <div className={`${style.mainModal}`}>
          <div
            className={`${style.modalBody} modal fade`}
            id="exampleModal0077"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className={`${style.modalDiaog} modal-dialog modal-dialog-centered `}
            >
              <div className={`${style.modalContent} modal-content`}>
                <div className={`${style.modalHead} modal-header`}>
                  <h5 className="modal-title"> {t("donateNow")}</h5>
                  <i
                    className={`${style.btnClose} fa-solid fa-xmark `}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></i>
                </div>

                <div className={`${style.modalInfo} modal-body`}>
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
                            <select
                              className={`${style.Cntrols} form-control my-3`}
                            >
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
                        {i18n.language === "en" && (
                          <button
                            type="button"
                            className={`${style.myBtn} btn btn-primary`}
                            data-bs-dismiss="modal"
                          >
                            Donation{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                        )}
                        {i18n.language === "ar" && (
                          <button
                            type="button"
                            className={`${style.myBtn} btn btn-primary`}
                            data-bs-dismiss="modal"
                          >
                            اتبرع<i className="fa-solid fa-chevron-left"></i>
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
