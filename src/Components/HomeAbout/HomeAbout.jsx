import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import style from "./HomeAbout.module.scss";

export default function HomeAbout({ about }) {
  const [t, i18n] = useTranslation();
  return (
    <div className={`${style.mainAbout}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${style.outter}`}>
              <div className={`${style.img}`}>
                <img src="images/about-home.jpg" alt="about" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${style.info} `}>
              <div className={`${style.title}`}>
                <h3 className={`${style.head}`}>
                  {t("aboutTitle")} <span>{t("aboutspan")}</span>
                </h3>
                {i18n.language === "ar" && (
                  <p>
                    بدأت صحتنا عملها كمؤسسة لا تهدف الى الربح وتسعى الى تحقيق
                    الصالح العام للمجتمع ككل والاهتمام بصحة كل ابناؤه ويتمثل ذلك
                    في اختيار اسم المؤسسة وهو "صحتنا" حيث يرمز الاسم إلى
                    الاهتمام بصحتنا جميعا كمجتمع وفيه دلالة أيضا لأن تكون صحتنا
                    على قائمة اهتمامات واولويات الافراد والكيانات باعتبارها أغلى
                    الثروات وأعز النعم التي يتمتع بها الأفراد.{" "}
                  </p>
                )}
              </div>
              <div className={`${style.btnsflex}`}>
                <div className={`${style.btns}`}>
                  {about?.btn1Text ? (
                    <Link to="about">
                      <button className={`${style.one} btn btn-primary`}>
                        {about?.btn1Text}
                        {i18n.language === "en" && (
                          <i className="fa-solid fa-chevron-right"></i>
                        )}
                        {i18n.language === "ar" && (
                          <i className="fa-solid fa-chevron-left"></i>
                        )}
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                  {about?.btn2Text ? (
                    <Link>
                      <button
                        className={`${style.two} btn btn-primary`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      >
                        {about?.btn2Text}
                        {i18n.language === "en" && (
                          <i className="fa-solid fa-chevron-right"></i>
                        )}
                        {i18n.language === "ar" && (
                          <i className="fa-solid fa-chevron-left"></i>
                        )}
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* modal */}

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
                        <ReactPlayer
                          url={about?.btn1Link}
                          controls
                          playing={true}
                          muted
                          volume={1}
                          autoPlay
                          className={`${style.myvide}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
