import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./MobNav.module.scss";
import MobModel from "../../HomeComponents/MobModel/MobModel";

export default function MobileNav() {
  const [isOpen, setisOpen] = useState(false);
  const [t, i18n] = useTranslation();
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
            <Link to="/" className={`${style.links} nav-link`}>
              {t("homeMenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="about" className={`${style.links} nav-link`}>
              {t("aboutmenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="initiative" className={`${style.links} nav-link`}>
              {t("Inmenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="healthcare" className={`${style.links} nav-link`}>
              {t("healthmeny")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="news" className={`${style.links} nav-link`}>
              {t("newsMenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="publication" className={`${style.links} nav-link`}>
              {t("pubMenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="career" className={`${style.links} nav-link`}>
              {t("carrerMenu")}
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="contact" className={`${style.links} nav-link`}>
              {t("contactmenu")}
            </Link>
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
