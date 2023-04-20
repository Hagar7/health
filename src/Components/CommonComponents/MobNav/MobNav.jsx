import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import style from "./MobNav.module.scss";
import MobModel from "../../HomeComponents/MobModel/MobModel";

export default function MobileNav({ setLang }) {
  const [isOpen, setisOpen] = useState(false);
  const [t, i18n] = useTranslation();
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  document.body.dir = i18n.dir();

  return (
    <>
      <div className={`${style.mobNav}`}>
        <div className={`${style.mobLeft}`}>
          <div className={`${style.logo}`}>
            <img src="images/Sehetna-Logo.6602a501.png" alt="alt" />
          </div>
        </div>
        <div className={`${style.mobRight}`}>
          <div className={`${style.icon}`}>
            <i className="fa-solid fa-bars" onClick={toggle}></i>
          </div>
        </div>
      </div>

      <div
        className={`${style.mobBar}`}
        style={{
          height: isOpen ? " 100%" : "0px",
          padding: isOpen ? " 10px 20px" : "0px 20px",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className={`${style.head}`}
          style={{
            display: isOpen ? " flex" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className={`${style.logo}`}>
            {" "}
            <img src="images/download.png" alt="logo" />
          </div>
          <div className={`${style.center}`}>
            {i18n.language === "en" && (
              <NavLink
                className="nav-link"
                onClick={() => {
                  localStorage.setItem("lang", "ar");
                  i18n.changeLanguage("ar");
                  setLang("ar");
                  setisOpen(false);
                }}
              >
                <span className={`${style.last}`}>عربي</span>
              </NavLink>
            )}
            {i18n.language === "ar" && (
              <NavLink
                className="nav-link"
                onClick={() => {
                  localStorage.setItem("lang", "en");
                  i18n.changeLanguage("en");
                  setLang("en");
                  setisOpen(false);
                }}
              >
                <span>English</span>
              </NavLink>
            )}
          </div>
          <div className={`${style.icon}`}>
            <i className="fa-solid fa-xmark" onClick={toggle}></i>
          </div>
        </div>

        <div
          className={`${style.body}`}
          style={{
            display: isOpen ? " block" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="/"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("homeMenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="about"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("aboutmenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="initiative"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("Inmenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="projects"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("healthmeny")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="news"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("newsMenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="publication"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("pubMenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="career"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("carrerMenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="contact"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("contactmenu")}
            </NavLink>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink
              to="donation"
              className={`${style.links} nav-link`}
              onClick={() => setisOpen(false)}
            >
              {t("donation")}
            </NavLink>
          </div>

        </div>

        <div
          className={`${style.footer}`}
          style={{
            display: isOpen ? " block" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className={`${style.Btn} text-center`}>
            <MobModel />
          </div>
          <div className={`${style.social}`}>
            <a
              href="https://www.facebook.com/SehetnaFoundation/"
              target={`_blank`}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/sehetna1?s=21" target={`_blank`}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/sehetna_foundation/?utm_medium=copy_link"
              target={`_blank`}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCSFPw7rcCk4In0-6oH9nUcw"
              target={`_blank`}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/sehetna-%D8%B5%D8%AD%D8%AA%D9%86%D8%A7/"
              target={`_blank`}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className={`${style.copy}`}>
            <p>{t("copyRight")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
