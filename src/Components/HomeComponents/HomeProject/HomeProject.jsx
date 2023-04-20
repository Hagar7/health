import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import style from './HomeProject.module.scss'

export default function HomeProject({project}) {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainProjects}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("latestPro")}</h2>
          <Link to="projects">
            <button className={`${style.two} btn btn-primary`}>
            {t("projectBtn")} 
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
        <div className={`${style.content}`} style={{ backgroundImage: `url(${project?.background})` }}>
          <div className={`${style.caption}`}>
            <h3>{project?.title}</h3>
            <Link to="projects">
              <button className={`${style.myBtn} btn btn-primary`}>
              {t("buttonLearn")}   
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
        <div className={`${style.divyflex} text-center`}>
          <Link to="projects">
            <button className={`${style.btnflex} btn btn-primary`}>
            {t("projectBtn")}
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
