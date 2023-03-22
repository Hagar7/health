import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

export default function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <footer className={`${style.footer}`}>
      {/* large screen */}
      <div className={`${style.headfooter}`}>
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 ">
              <div className={`${style.footerItem}`}>
                <h3>{t("subscribe")}</h3>
                <p>
                  {t("subscripeDec")}
                </p>
                <div className={`${style.inputGrop} input-group mb-3`}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("subscripeHolder")}
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    {t("subscribeTitle")}
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-lg-2 "></div>
            <div className=" col-lg-4 ">
              <div className={`${style.footerinfo}`}>
                <div className={`${style.left}`}>
                  <i className="fa-solid fa-phone-volume"></i>
                  <span>{t("phone")}</span>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className={`${style.linksRight}`}>
                      <Link to="/" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("homeMenu")}</span>
                      </Link>
                      <Link to="about" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("aboutmenu")}</span>
                      </Link>
                      <Link to="initiative" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("Inmenu")}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={`${style.linkscenter}`}>
                      <Link to="projects" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("projectMenu")}</span>
                      </Link>
                      <Link to="news" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>
                        {t("newsMenu")}
                        </span>
                      </Link>
                      <Link to="publication" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>
                        {t("pubMenu")}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={`${style.linksleft}`}>
                      <Link to="career" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("carrerMenu")}</span>
                      </Link>
                      <Link to="contact" className="nav-link my-2">
                        <span className={`${style.ClrChange}`}>{t("contactmenu")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* ipad & mob */}
      <div className={`${style.footerSmall}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${style.information}`}>
                <i className="fa-solid fa-phone-volume"></i>
                <span>{t("phone")}</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className={`${style.Itemsmall}`}>
                <h3>{t("subscribe")}</h3>
                <p>
                {t("subscripeDec")}
                </p>
                <div className={`${style.inputGrop} input-group mb-3`}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder= {t("subscripeHolder")}
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                  {t("subscribeTitle")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
