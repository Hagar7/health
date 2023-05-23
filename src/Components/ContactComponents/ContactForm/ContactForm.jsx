import React, { useState } from "react";
import style from "./ContactForm.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Joi from "joi";
import { postContactForm } from "../../../store/ContactForm.Slice";

export default function ContactForm() {
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
      dispatch(postContactForm(formContact));
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
    <div className={`${style.contactForm}  `}>
      <form onSubmit={submitHandler} noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className={`${style.inputData}  `}>
              <input
                onChange={changeHandler}
                type="text"
                name="name"
                value={formContact.name}
                className={`${style.Cntrols} form-control my-3`}
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
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("ageplace")}
              />
            </div>
            {showAlertMsg("age")}
            <div className={`${style.inputData}  `}>
              <input
                onChange={changeHandler}
                type="email"
                value={formContact.email}
                name="email"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("emailPlace")}
              />
            </div>
            {showAlertMsg("email")}
          </div>
          <div className="col-md-6">
            <div className={`${style.inputData} `}>
              <select
                className={`${style.Cntrols} form-control my-3`}
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
                value={formContact.phone}
                name="phone"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("phonePlace")}
              />
            </div>
            {showAlertMsg("phone")}
          </div>
          <div className="col-md-12">
            <div className={`${style.inputData}  `}>
              <textarea
               value={formContact.message}
                onChange={changeHandler}
                name="message"
                cols="30"
                rows="8"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("volunterMsg")}
              ></textarea>
            </div>
            {showAlertMsg("message")}
          </div>
        </div>
        <div className={`${style.formBtns}`}>
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
      </form>
    </div>
  );
}
