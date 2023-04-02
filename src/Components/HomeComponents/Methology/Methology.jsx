import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import style from './Methology.module.scss'

export default function Methology({methodology}) {

    let [mytitle, setInfo] = useState(" ");
    let [popTitle,setpopupTitle] = useState("")
    let getData = (element) => {
      setInfo(element.title);
      setpopupTitle(element.popupTitle)
    };
    const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainMethology}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{t("methologyTitle")}</h2>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.itemUp}`}>
             {methodology?.map((el)=>
             <div className={`${style.info} `} key={el.id} data-bs-toggle="modal"
             data-bs-target="#exampleModal4" onClick={() => getData(el)}>
             <div className={`${style.img} `}>
             <img src={el.icon} alt="METHODOLOGY1" />
             </div>
             <h6>{el.title}</h6>
             </div>
            )} 
        
 
        <div
          className={`${style.modalMethology} modal fade modal-xl`}
          id="exampleModal4"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className={`${style.contentActivity} modal-content`}>
              <div className={`${style.headerActivity} modal-header`}>
                <i
                  className="fa-solid fa-xmark "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></i>
              </div>
              <h1 className="modal-title" id="exampleModalLabel">
                {mytitle} 
              </h1>
              <div className="modal-body">
                <p>
                 {popTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
  )
}
