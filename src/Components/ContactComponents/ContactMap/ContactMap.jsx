import React from 'react'
import style from './ContactMap.module.scss'

export default function ContactMap({info}) {
  return (
    <div className={`${style.contactMap}`}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 my-5">
                    {info?.cards.map((item)=>
                    <div className={`${style.info}`} key={item.id}>
                        <img src={item.image} alt="icon" />
                        <div className={`${style.items}`}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <div className={`${style.map}`}>
                <iframe src={info?.map} title="location"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
