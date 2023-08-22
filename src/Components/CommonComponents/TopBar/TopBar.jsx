import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import style from "./TopBar.module.scss";

export default function TopBar({ setLang }) {
  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className={`${style.topBar}`}>
      <div className={`${style.left}`}>
        <i className="fa-solid fa-phone-volume"></i>
        <span>{t("phone")}</span>
      </div>
      <div className={`${style.right}`}>
        <NavLink
          to="career"
          className={({ isActive }) =>
            isActive ? " nav-link hoverClr orange" : "nav-link orange"
          }
        >
          <span className={`${style.lastar}`}>{t("carrerMenu")}</span>
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? " nav-link hoverClr orange" : "nav-link orange"
          }
        >
          <span>{t("contactmenu")}</span>
        </NavLink>
        {/* <NavLink to="donation" className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }>
          <span>{t("donation")}</span>
        </NavLink> */}
        {i18n.language === "en" && (
          <NavLink
            className={({ isActive }) =>
              isActive ? " nav-link orange" : "nav-link orange"
            }
            onClick={() => {
              localStorage.setItem("lang", "ar");
              i18n.changeLanguage("ar");
              setLang("ar");
            }}
          >
            <span className={`${style.last}`}>عربي</span>
          </NavLink>
        )}
        {i18n.language === "ar" && (
          <NavLink
            className={({ isActive }) =>
              isActive ? " nav-link orange" : "nav-link orange"
            }
            onClick={() => {
              localStorage.setItem("lang", "en");
              i18n.changeLanguage("en");
              setLang("en");
            }}
          >
            <span>English</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}
