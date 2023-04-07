import React from 'react'
import style from './InitiativeAbout.module.scss'

export default function InitiativeAbout({initiative}) {
  return (
    <div className={`${style.main}`}>
    <div className="container">
        <div className={`${style.content}`}>
            <p>{initiative?.desc1}</p>
            <p>{initiative?.desc2}</p>
            <p>{initiative?.desc3}</p>
        </div>
    </div>

</div>
  )
}
