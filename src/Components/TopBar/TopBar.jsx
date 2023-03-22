import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./TopBar.module.scss";

export default function TopBar() {
  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className={`${style.topBar}`}>
      <div className={`${style.left}`}>
        <i className="fa-solid fa-phone-volume"></i>
        <span>{t("phone")}</span>
      </div>
      <div className={`${style.right}`}>
        <Link to="career" className="nav-link">
          <span className={`${style.lastar}`}>{t("carrerMenu")}</span>
        </Link>
        <Link to="contact" className="nav-link">
          <span>{t("contactmenu")}</span>
        </Link>
        {i18n.language === "en" && (
          <Link
            className="nav-link"
            onClick={() => {
              localStorage.setItem("lang", "ar");
              i18n.changeLanguage("ar");
              window.reload();
            }}
          >
            <span className={`${style.last}`}>عربي</span>
          </Link>
        )}
        {i18n.language === "ar" && (
          <Link
            className="nav-link"
            onClick={() => {
              localStorage.setItem("lang", "en");
              i18n.changeLanguage("en");
              window.reload();
            }}
          >
            <span>English</span>
          </Link>
        )}
      </div>
    </div>
  );
}
