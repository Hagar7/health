import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import style from './Mission.module.scss'

export default function Mission({qualities}) {

  const [t, i18n] = useTranslation();
  let [popUp,setpopUp] = useState({
    popup1Title:"",
    popup1Desc:"",
    popup2Title:"",
    popup2Desc:"",
    popup3Title:"",
    popup3Desc:"",
    popup4Title:"",
    popup4Desc:"",
    popup5Title:"",
    popup5Desc:""
  })
  let getData = (element) => {
    setpopUp(element);
  };

  return (
    <div className={`${style.mission}`}>
    <div className="container">
      <div className={`${style.content}`}>
      <div className="row">
        {qualities?.map((item)=>
        <div className="col-lg-4" key={item.id}>
        <div className={`${style.item1}`}>
        <img src={item.background} alt="mission" />
        <h3>{item.title}</h3>
        <div className={`${style.brdr}`}></div>
        <p>{item.description}</p>
        {i18n.language === "en" &&
        <div className={`${style.test}`}></div>
        }
         {i18n.language === "ar" &&
        <div className={`${style.test1}`}></div>
        }
        {item.btn1Text? 
        <button  data-bs-toggle="modal"
        data-bs-target="#exampleModal4"  onClick={() => getData(item)}>{t("buttonLearn")}</button>:""} 
        </div>
        </div>
        )}
      </div>
       {/* modal */}
        <div className={`${style.mainModal}`}>
          <div
            className={`${style.modalBody} modal fade`}
            id="exampleModal4"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className={`${style.modalDiaog} modal-dialog modal-dialog-centered modal-xl`}
            >
              <div className={`${style.modalContent} modal-content`}>
                <div className={`${style.modalInfo} modal-body`}>
                <div className={`${style.modalPara}`}>
                <p>{popUp.popup1Title}</p>
                <span>{popUp.popup1Desc}</span>
                <p>{popUp.popup2Title}</p>
                <span>{popUp.popup2Desc}</span>
                <p>{popUp.popup3Title}</p>
                <span>{popUp.popup3Desc}</span>
                <p>{popUp.popup4Title}</p>
                <span>{popUp.popup4Desc}</span>
                <p>{popUp.popup5Title}</p>
                <span>{popUp.popup5Desc}</span>
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
