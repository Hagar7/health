import React from 'react'
import style from './Pub.module.scss'
import { useTranslation } from 'react-i18next';

export default function Pub({publications}) {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t('pubMenu')}</h2>
      </div>
      <p>{publications?.sectionDesc}</p>
      <div className="row"> 
      {publications?.cards.map((item)=>
       <div className="col-lg-4" key={item.id}>
       <div className={`${style.card}`}>
         <img src={item.background} alt="report" />
         <div className={`${style.overlay}`}>
           <h4>{item.title}</h4>
           <a
             href={item.btn0Link}
             rel="noreferrer"
             target={"_blank"}
             className={`${style.one} btn btn-primary`}
           >
             {item.btn1Text}
             {i18n.language === "en" && 
                          <i className="fa-solid fa-chevron-right">
                      </i>
                        }
                         {i18n.language === "ar" && 
                          <i className="fa-solid fa-chevron-left">
                      </i>
                        }
           </a>
         </div>
       </div>
     </div>
      )}
      </div>
    </div>
  </div>
  )
}
