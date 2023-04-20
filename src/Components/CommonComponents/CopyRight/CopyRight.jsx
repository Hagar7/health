import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './CopyRight.module.scss'

export default function CopyRight() {
  const [t, i18n] = useTranslation();
  return (
    <>
    <div className={`${style.copy}`}>
        <div className={`${style.copyContainer} container`}>
            <div className="row">
                <div className="col-lg-6">
                    <div className={`${style.item}`}>
                        <img src="images/footer.png" alt="logo"  />
                    </div>
                </div>
                <div className="col-lg-2 "></div>
               <div className=" col-lg-4 ">
                <div className={`${style.item}`}>
                <h3>{t("socialMedia")}</h3>
                <div className={`${style.social}`}>
            <a
              href="https://www.facebook.com/SehetnaFoundation/"
              target={`_blank`}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/sehetna1?s=21" target={`_blank`}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/sehetna_foundation/?utm_medium=copy_link"
              target={`_blank`}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCSFPw7rcCk4In0-6oH9nUcw"
              target={`_blank`}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/sehetna-%D8%B5%D8%AD%D8%AA%D9%86%D8%A7/"
              target={`_blank`}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
                </div>

               </div>
            </div>
        </div>
    </div>

    <div className={`${style.copyRight}`}>
        <div className="container">
            <p>{t("copyRight")}</p>
        </div>
        </div>
    </>
  )
}
