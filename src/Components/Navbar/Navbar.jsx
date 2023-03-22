import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import TopBar from "../TopBar/TopBar";
import style from "./Navbar.module.scss";

export default function Navbar() {
  const [t, i18n] = useTranslation();

  return (
    <>
      <TopBar />
      <div className={`${style.navy} py-3`}>
        <div className={`${style.logo}`}>
          <img
            src="images/Sehetna-Logo.6602a501.png"
            alt="logo"
            className="w-100"
          />
        </div>
        <div className={`${style.listItems}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span className={`${style.lasten}`}>{t("homeMenu")}</span>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span>{t("aboutmenu")}</span>
          </NavLink>
          <NavLink
            to="initiative"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span>{t("Inmenu")}</span>
          </NavLink>
          <NavLink
            to="healthcare"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span>{t("healthmeny")}</span>
          </NavLink>
          <NavLink
            to="news"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span>{t("newsMenu")}</span>
          </NavLink>
          <NavLink
            to="publication"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr" : "nav-link"
            }
          >
            <span className={`${style.last}`}>{t("pubMenu")}</span>
          </NavLink>
        </div>
        <div className={`${style.Btn}`}>
          <Modal />
        </div>
      </div>
    </>
  );
}
