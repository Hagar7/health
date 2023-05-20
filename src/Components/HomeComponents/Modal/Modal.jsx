import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Modal.module.scss";
import { postCollaborateForm } from "../../../store/Collaborate.Slice";
import Joi from "joi";
import { useDispatch } from "react-redux";

export default function Modal() {
  const [t, i18n] = useTranslation();
  const [errorList, setErrorList] = useState([]);
  let dispatch = useDispatch();
  const [formContact, setformContact] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    phone: "",
    message: "",
  });
  const changeHandler = (e) => {
    let myForm = { ...formContact };
    myForm[e.target.name] = e.target.value;
    setformContact(myForm);
  };

  // joi validation
  let validationForm = () => {
    let schema = Joi.object({
      name: Joi.string().required().min(3),
      age: Joi.number().required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } }),
      gender: Joi.string().required(),
      phone: Joi.string().required(),
      message: Joi.string().max(500),
    });
    return schema.validate(formContact, { abortEarly: false });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let validateResponse = validationForm();
    if (validateResponse.error) {
      setErrorList(validateResponse.error.details);
    } else {
      dispatch(postCollaborateForm(formContact));

      setformContact({
        name: "",
        age: "",
        email: "",
        gender: "",
        phone: "",
        message: "",
      });
    }
  };

  const showAlertMsg = (pramiter) => {
    let newMsg = errorList.filter((error) => error.message.includes(pramiter));
    if (newMsg[0] !== undefined) {
      return (
        <span className={`${style.msgAlert} alert alert-danger p-1`}>
          {newMsg[0].message}
        </span>
      );
    } else {
      return "";
    }
  };
  return (
    <div className={`${style.mainModal}`}>
      {i18n.language === "en" && (
        <button
          type="button"
          className={`${style.myModal} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          COLLABORATE WITH US <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      {i18n.language === "ar" && (
        <button
          type="button"
          className={`${style.myModal} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          تعاون معانا <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <div
        className={`${style.modalBody} modal fade modal-lg`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={submitHandler} noValidate>
          <div
            className={`${style.modalDiaog} modal-dialog modal-dialog-centered`}
          >
            <div className={`${style.modalContent} modal-content`}>
              <div className={`${style.modalHeader} modal-header`}>
                <h1
                  className={`${style.head} modal-title fs-5`}
                  id="staticBackdropLabel"
                >
                  {t("formtitle")}
                </h1>
                <button
                  type="button"
                  className={`${style.btnClose} btn-close`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${style.inputData}  `}>
                      <input
                        value={formContact.name}
                        onChange={changeHandler}
                        type="text"
                        name="name"
                        className="form-control my-3 "
                        placeholder={t("namePlace")}
                      />
                    </div>
                    {showAlertMsg("name")}
                    <div className={`${style.inputData}  `}>
                      <input
                        onChange={changeHandler}
                        type="number"
                        value={formContact.age}
                        name="age"
                        className="form-control my-3 "
                        placeholder={t("ageplace")}
                      />
                    </div>
                    {showAlertMsg("age")}
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.inputData}  `}>
                      <select
                        className="form-control my-3"
                        onChange={changeHandler}
                        name="gender"
                        value={formContact.gender}
                      >
                        <option defaultValue>Choose Gender</option>
                        <option value="male">{t("maleplace")}</option>
                        <option value="female">{t("femaleplace")}</option>
                      </select>
                    </div>
                    {showAlertMsg("gender")}
                    <div className={`${style.inputData}  `}>
                      <input
                        onChange={changeHandler}
                        type="text"
                        name="phone"
                        value={formContact.phone}
                        className="form-control my-3 "
                        placeholder={t("phonePlace")}
                      />
                    </div>
                    {showAlertMsg("phone")}
                  </div>
                  <div className="col-md-12">
                    <div className={`${style.inputData}  `}>
                      <input
                        onChange={changeHandler}
                        type="email"
                        value={formContact.email}
                        name="email"
                        className="form-control my-3 "
                        placeholder={t("emailPlace")}
                      />
                    </div>
                    {showAlertMsg("email")}
                    <div className={`${style.inputData}  `}>
                      <textarea
                        onChange={changeHandler}
                        name="message"
                        value={formContact.message}
                        cols="30"
                        rows="8"
                        className="form-control my-3"
                        placeholder={t("msgPlace")}
                      ></textarea>
                    </div>
                    {showAlertMsg("message")}
                  </div>
                </div>
              </div>
              <div className={`${style.modalFooter} modal-footer`}>
                {i18n.language === "en" && (
                  <button className={`${style.myBtn} btn btn-primary`}>
                    Send <i className="fa-solid fa-chevron-right"></i>
                  </button>
                )}
                {i18n.language === "ar" && (
                  <button className={`${style.myBtn} btn btn-primary`}>
                    ارسال <i className="fa-solid fa-chevron-left"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
