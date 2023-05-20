import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./ContactModal.module.scss";
import { useDispatch } from "react-redux";
import Joi from "joi";
import { postCollaborateForm } from "../../../store/Collaborate.Slice";

export default function ContactModal() {
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
    <div className={`${style.contactModal}`}>
      {i18n.language === "en" && (
        <button
          type="button"
          className={`${style.myModalSmall} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal232"
        >
          COLLABORATE WITH US <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      {i18n.language === "ar" && (
        <button
          type="button"
          className={`${style.myModalSmall} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal232"
        >
          تعاون معانا <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <div
        className={`${style.modalBodySmall} modal fade`}
        id="exampleModal232"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={submitHandler} noValidate>
          <div
            className={`${style.modalDiaogSmall} modal-dialog modal-dialog-centered`}
          >
            <div className={`${style.modalContentSmall} modal-content`}>
              <div className={`${style.modalHeaderSmall} modal-header`}>
                <h1
                  className={`${style.headSmall} modal-title fs-5`}
                  id="exampleModalLabel"
                >
                  {t("formtitle")}
                </h1>
                <button
                  type="button"
                  className={`${style.btnCloseSmall} btn-close`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${style.inputData}  `}>
                      <input
                        onChange={changeHandler}
                        type="text"
                        value={formContact.name}
                        name="name"
                        className="form-control my-3"
                        placeholder={t("namePlace")}
                      />
                    </div>
                    {showAlertMsg("name")}
                    <div className={`${style.inputData}  `}>
                      <input
                        onChange={changeHandler}
                        type="number"
                        name="age"
                        value={formContact.age}
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
                        value={formContact.phone}
                        onChange={changeHandler}
                        type="text"
                        name="phone"
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
                        value={formContact.message}
                        onChange={changeHandler}
                        name="message"
                        cols="30"
                        rows="6"
                        className="form-control my-3"
                        placeholder={t("msgPlace")}
                      ></textarea>
                    </div>
                    {showAlertMsg("message")}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
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
