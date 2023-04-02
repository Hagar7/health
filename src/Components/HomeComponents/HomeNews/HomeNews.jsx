import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import style from './HomeNews.module.scss'


export default function HomeNews({news}) {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main} `}>
    <div className="container">
      <div className={`${style.head} `}>
        <h2>{t("newsTitle")}</h2>
        <Link to="news">
          <button className={`${style.two} btn btn-primary`}>
          {t("newsBtn")}
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
      <div className="row">
        {news?.map((item)=>
        <div className="col-lg-6" key={item.id}>
          <div className={`${style.item} px-4`}>
            <img
              src="images/Sehetna_Gouna_Event_2020_52.jpeg"
              alt="Sehetna_Gouna_Event"
            />
            <h6>{item.date}</h6>
            <h4>{item.title}</h4>
            <p>
            {item.description}
            </p>
          </div>
        </div>
        )}

      </div>
      <div className={`${style.divyflex} text-center`}>
        <Link to="news">
          <button className={`${style.btnflex} btn btn-primary`}>
          {t("newsBtn")}
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
    </div>
  </div>
  )
}
