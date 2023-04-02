import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import style from './SehtnaStart.module.scss'

export default function SehtnaStart({sehetnaStart}) {
  const [t, i18n] = useTranslation();

  return (
    <div className={`${style.about}`}>
    <div className="container">
    {i18n.language === "en" &&
        <h2>HOW <span>SEHETNA</span> STARTED</h2>
    }
      {i18n.language === "ar" &&
        <h2>كيف بدأت <span>صحتنا </span></h2>
    }
        <p dangerouslySetInnerHTML={{__html:sehetnaStart?.description}}></p>
        <div className={`${style.aboutBtns}`} >
        <Link to=""> <button className={`${style.one} btn btn-primary`}>
          {sehetnaStart?.btn1Text} 
          {i18n.language === "en" &&
           <i className="fa-solid fa-chevron-right"></i> 
          }
          {i18n.language === "ar" &&
           <i className="fa-solid fa-chevron-left"></i> 
          }
          </button></Link>
          <Link to=""><button className={`${style.two} btn btn-primary`}>
          {sehetnaStart?.btn2Text}
          {i18n.language === "en" &&
           <i className="fa-solid fa-chevron-right"></i> 
          }
          {i18n.language === "ar" &&
           <i className="fa-solid fa-chevron-left"></i> 
          }
          </button>
          </Link>

        </div>

    </div>
</div>
  )
}
