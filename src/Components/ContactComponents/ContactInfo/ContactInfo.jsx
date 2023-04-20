import React from "react";
import style from "./ContactInfo.module.scss";
import Modal from "../../HomeComponents/Modal/Modal";
import ContactModal from "../ContactModal/ContactModal";

export default function ContactInfo({ collaborations }) {
  return (
    <>
      <div className={`${style.main}`}>
        <div className="container">
          <div className={`${style.head}`}>
            <h2>{collaborations?.title}</h2>
          </div>
          <div className={`${style.content}`}>
            <p>{collaborations?.description}</p>
            <Modal />
          </div>
        </div>
      </div>

      <div className={`${style.mainSmall}`}>
        <div className="container">
          <div className={`${style.head}`}>
            <h2>{collaborations?.title}</h2>
          </div>
          <div className={`${style.content}`}>
            <p>{collaborations?.description}</p>
            <ContactModal />
          </div>
        </div>
      </div>
    </>
  );
}
