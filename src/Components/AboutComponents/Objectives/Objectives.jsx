import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import style from './Objectives.module.scss'

export default function Objectives({objectives}) {
  const [t, i18n] = useTranslation();
    let [myPop, setmyPop] = useState({
      title:"",
      popup1Desc:"",
      popup2Desc:"",
      popup3Desc:"",
      popup4Desc:""
    });


  
    let getData = (element) => {
      setmyPop(element);

    };


  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.pageContent}`}>
      <div className={`${style.head}`}>
        <h2>{t("objectives")}</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className={`${style.img}`}>
            <img src="images/Criteria.d72358c61.jpg" alt="doctor" />
          </div>
        </div>
        <div className="col-lg-6">
        <div className={`${style.content}`}>
          {objectives?.map((item)=>
          <div key={item.id}>
            <h3>{item.title}</h3>
            <ul>
              <li>{item.description}</li>
            </ul>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal6" onClick={() => getData(item)}>
               {t("buttonLearn")}
            </button>







            </div>
          )}
        </div>
        </div>
      </div>
      {/* modal */}
<div className={`${style.mainModal}`}>
<div
  className={`${style.modalBody} modal fade`}
  id="exampleModal6"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div
    className={`${style.modalDiaog} modal-dialog modal-dialog-centered`}
  >
    <div className={`${style.modalContent} modal-content`}>
      <div className={`${style.modalInfo} modal-body`}>
        <div className={`${style.modalPara}`}>
          <p>{myPop.title}</p>
          <ul>
              <li>{myPop.popup1Desc}</li>
              <li>{myPop.popup2Desc}</li>
              <li>{myPop.popup3Desc}</li>
              {myPop.popup4Desc?<li>{myPop.popup4Desc}</li>:""}
            </ul>
        </div>
        <div className={`${style.modalClosed}`}>
          <i
            className={`${style.btnClose} fa-solid fa-xmark `}
            data-bs-dismiss="modal"
            aria-label="Close"
          ></i>
        </div>
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
