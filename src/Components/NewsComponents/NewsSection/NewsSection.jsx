import React from 'react'
import style from './NewsSection.module.scss'
import { useTranslation } from 'react-i18next';

export default function NewsSection({news}) {
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t('news')}</h2>
      </div>
      
        {news?.map((item)=>
      <div className="row" key={item.id}>
         <div className="col-lg-3 ">
            <div className={`${style.picture}`}>
                <img src={item.background} alt="Sehetna_Gouna_Event" />
            </div> 
        </div>
             <div className=" col-lg-9">
                <div className={`${style.content}`}>
                <h6>{item.date}</h6>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
                </div>
            </div>
            </div>
        )}    
    </div>
  </div>
  )
}
