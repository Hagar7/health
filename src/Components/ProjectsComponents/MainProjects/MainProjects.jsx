import React from "react";
import style from "./MainProjects.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MainProjects({ projects }) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainProject}`}>
      <div className="container">
        <div className="row">
          {projects?.map((item) => (
            <div className="col-lg-6" key={item.id}>
              <div className={`${style.item}`}>
                <div
                  className={`${style.card}`}
                  style={{ backgroundImage: `url(${item.profile})` }}
                >
                  <div className={`${style.overlay}`}>
                    <h6>{item.title}</h6>
                    <Link to={`/projects/${item.id}`}>
                      <button className={`${style.two} btn btn-primary`}>
                        {item.btnText}
                        {i18n.language === "en" && (
                          <i className="fa-solid fa-chevron-right"></i>
                        )}
                        {i18n.language === "ar" && (
                          <i className="fa-solid fa-chevron-left"></i>
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
