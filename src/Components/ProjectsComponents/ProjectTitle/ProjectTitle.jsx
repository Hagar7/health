import React from 'react'
import style from './ProjectTitle.module.scss'

export default function ProjectTitle({statistics}) {
  return (
    <div className={`${style.main}`}>
    <div className="container">
      <div className={`${style.head}`}>
        <h2>{statistics?.pageTitle}</h2>
      </div>
      </div>
      <div className={`${style.content}`}>
        <div className="container">
      <div className={`${style.title}`}>
      <h3>{statistics?.sectionTitle}</h3>
      </div>
        </div>
      </div>
      </div>  )
}
