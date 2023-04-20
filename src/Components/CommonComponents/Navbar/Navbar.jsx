import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import style from "./Navbar.module.scss";
import Modal from "../../HomeComponents/Modal/Modal";

export default function Navbar({ setLang }) {
  const [t, i18n] = useTranslation();

  return (
    <>
      <TopBar setLang={setLang} />
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
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }
          >
            <span className={`${style.lasten}`}>{t("homeMenu")}</span>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }
          >
            <span>{t("aboutmenu")}</span>
          </NavLink>
          <NavLink
            to="initiative"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }
          >
            <span>{t("Inmenu")}</span>
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }
          >
            <span>{t("healthmeny")}</span>
          </NavLink>
          <NavLink
            to="news"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
            }
          >
            <span>{t("newsMenu")}</span>
          </NavLink>
          <NavLink
            to="publication"
            className={({ isActive }) =>
              isActive ? " nav-link hoverClr orange" : "nav-link orange"
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
