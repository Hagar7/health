import React, { useState } from "react";
import style from "./Form.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { postCareerForm } from "../../../store/CareerForm.Slice";
import Joi from "joi";

export default function Form() {
  const [t, i18n] = useTranslation();
  const [errorList, setErrorList] = useState([]);
  let dispatch = useDispatch();
  const [formCareer, setformCareer] = useState({
    name: "",
    age: "",
    education: "",
    email: "",
    gender: "",
    phone: "",
    previous_experience:"",
    message: "",
  });

  const changeHandler = (e) => {
    let myForm = { ...formCareer };
    myForm[e.target.name] = e.target.value;
    setformCareer(myForm);
  };

   // joi validation
   let validationForm = () => {
    let schema = Joi.object({
      name: Joi.string().required().min(3),
      age:Joi.number().required(),
      email: Joi.string().required().email({ tlds: { allow: false } }),
      education:Joi.string().required(),
      gender:Joi.string().required(),
      phone:Joi.string().required(),
      previous_experience:Joi.string().required(),
      message:Joi.string().max(500)
    });
    return schema.validate(formCareer, { abortEarly: false });
  };



  const submitHandler = (e) => {
    e.preventDefault();
    let validateResponse = validationForm();
    if (validateResponse.error) {
      setErrorList(validateResponse.error.details);
    } else {
      dispatch(postCareerForm(formCareer));
      setformCareer({
        name: "",
        age: "",
        education: "",
        email: "",
        gender: "",
        phone: "",
        previous_experience:"",
        message: "",
      })
        }
        
  };
  const showAlertMsg = (pramiter) => {
    let newMsg = errorList.filter((error) => error.message.includes(pramiter));
    if (newMsg[0] !== undefined) {
      return <span className={`${style.msgAlert} alert alert-danger p-1`}>{newMsg[0].message}</span>;
    } else {
      return "";
    }
  };



  return (
    <div className={`${style.volunterForm}  `}>
      <form onSubmit={submitHandler} noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className={`${style.inputData}  `}>
              <input
                onChange={changeHandler}
                type="text"
                value={formCareer.name}
                name="name"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("namePlace")}
              />
            </div>
            {showAlertMsg("name")}
            <div className={`${style.inputData}  `}>
              <input
                type="number"
                value={formCareer.age}
                name="age"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("ageplace")}
                onChange={changeHandler}              />
            </div>
            {showAlertMsg("age")}
            <div className={`${style.inputData}  `}>
              <input
                type="text"
                value={formCareer.education}
                name="education"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("Education")}
                onChange={changeHandler}              />
            </div>
            {showAlertMsg("education")}
            <div className={`${style.inputData}  `}>
              <input
              value={formCareer.email}
                type="email"
                name="email"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("emailPlace")}
                onChange={changeHandler}              />
            </div>
          {showAlertMsg("email")}
          </div>
          <div className="col-md-6">
            <div className={`${style.inputData} `}>
              <select
                className={`${style.Cntrols} form-control my-3`}
                name="gender"
                value={formCareer.gender}
                onChange={changeHandler}>
                <option defaultValue>Choose Gender</option>
                <option value="male">{t("maleplace")}</option>
                <option value="female">{t("femaleplace")}</option>
              </select>
            </div>
            {showAlertMsg("gender")}
            <div className={`${style.inputData}  `}>
              <input
                type="text"
                value={formCareer.phone}
                name="phone"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("phonePlace")}
                onChange={changeHandler}              />
            </div>
            {showAlertMsg("phone")}
            <div className={`${style.inputData}  `}>
              <input
                type="text"
                value={formCareer.previous_experience}
                name="previous_experience"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("prev")}
                onChange={changeHandler}              />
            </div>
          {showAlertMsg("previous_experience")}
          </div>
          <div className="col-md-12">
            <div className={`${style.inputData}  `}>
              <textarea
                name="message"
                value={formCareer.message}
                cols="30"
                rows="8"
                className={`${style.Cntrols} form-control my-3`}
                placeholder={t("volunterMsg")}
                onChange={changeHandler}></textarea>
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
