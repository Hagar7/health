import React from 'react'
import style from './CareerInfo.module.scss'

export default function CareerInfo({team}) {
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{team?.title}</h2>
      </div>
      <div className={`${style.content}`}>
        <p>{team?.desc1}</p>
        <span>{team?.desc2}</span>
        <span>{team?.desc3}</span>
      </div>
      </div>
      </div>
  )
}
