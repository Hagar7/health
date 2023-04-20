import React from 'react'
import style from './AboutModal.module.scss'

export default function AboutModal({about}) {
  return (
    <div className={`${style.aboutModal}`}>
    <div
      className={`${style.modalBody} modal fade modal-lg`}
      id="exampleModal3"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className={`${style.modalDiaog} modal-dialog modal-dialog-centered`}
      >
        <div className={`${style.modalContent} modal-content`}>
          <div className={`${style.modalHeader} modal-header`}>
            <i
              className={`${style.btnClose} fa-solid fa-xmark `}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">
            {/* <ReactPlayer
              url={about?.btn1Link}
              controls
              playing={true}
              muted
              volume={1}
              autoPlay
              className={`${style.myvide}`}
            /> */}
             <video controls autoPlay muted className={`${style.myvideo}`}>
          <source src={about?.btn1Link} type="video/mp4" />
                </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
