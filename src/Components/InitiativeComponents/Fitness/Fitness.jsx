import React from "react";
import style from "./Fitness.module.scss";
import { useTranslation } from "react-i18next";

export default function Fitness({ nutrition }) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("fitness")}</h2>
        </div>
        <div className={`${style.largeScreen}`}>
          <div className="row">
            {nutrition?.cards.map((item) => (
              <div className={`${style.test} col-lg-6`} key={item.id}>
                <div className={`${style.item}`}>
                  {item.title ? <h3>{item.title}</h3> : ""}
                  {item.description ? <p>{item.description}</p> : ""}
                  <div className={`${style.img}`}>
                    {item.background ? (
                      <img src={item.background} alt={item.background} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${style.smallScreen}`}>
          <div className="row">
            <div className="col-lg-6">
              <div className={`${style.img}`}>
                <img src={nutrition?.background} alt={nutrition?.background} />
              </div>
            </div>
            {nutrition?.cards.map((item) => (
              <div className={`${style.test} col-lg-6`} key={item.id}>
                <div className={`${style.item}`}>
                  <div className={`${style.img}`}>
                    {item.background ? "" : ""}
                  </div>
                  {item.title ? <h3>{item.title}</h3> : ""}
                  {item.description ? <p>{item.description}</p> : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
