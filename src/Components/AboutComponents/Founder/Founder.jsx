import React from 'react'
import style from './Founder.module.scss'

export default function Founder({founder}) {
  return (
    <>
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{founder?.sectionTitle}</h2>
      </div>
      <div className="row my-5">
        <div className="col-lg-6">
            <div className={`${style.item}`}>
                <div className={`${style.icon}`}>❝</div>
                <p dangerouslySetInnerHTML={{__html:founder?.description}}></p>
            </div>
        </div>
        <div className={`${style.iconsmall}`}>❞</div>
        <div className="col-lg-6">
            <div className={`${style.img}`}>
                <img src={founder?.background} alt="founder" />
            </div>
        </div>
      </div>
      <div className={`${style.iconBig}`}>❞</div>
      </div>
      </div>
    








    {/* // ipad */}
    <div className={`${style.mediumMain}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{founder?.sectionTitle}</h2>
      </div>
      <div className="row my-5">
      <div className="col-lg-12">
            <div className={`${style.img}`}>
                <img src={founder?.background} alt="founder" />
            </div>
        </div>
              <div className="col-lg-12">
            <div className={`${style.item}`}>
                <div className={`${style.icon}`}>❝</div>
                <p dangerouslySetInnerHTML={{__html:founder?.description}}></p>
            </div>
        </div>
      </div>
      <div className={`${style.iconBig}`}>❞</div>
      </div>
      </div>
      </>
  )
}
