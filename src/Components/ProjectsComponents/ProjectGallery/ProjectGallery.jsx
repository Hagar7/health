import React from "react";
import style from "./ProjectGallery.module.scss";
import ProjectImage from "../ProjectImage/ProjectImage";
import { useTranslation } from "react-i18next";
import ProjectVideo from "../ProjectVideo/ProjectVideo";

export default function ProjectGallery({ gallery, video }) {
  const [t, i18n] = useTranslation();

  return (
    <div className={`${style.mainGallery}`}>
      <div className="container">
        <div className={`${style.head}`}>
          <h2>{t("album")}</h2>
        </div>
        <div className={`${style.galleryInfo}`}>
          <div
            className={`${style.galleryTabs} nav nav-tabs`}
            id="myTab"
            role="tablist"
          >
            <div className={`${style.right}`}>
              <button
                className={`${style.navGallery} nav-link active`}
                id="gallery-tab"
                data-bs-toggle="tab"
                data-bs-target="#gallery-tab-pane"
                type="button"
                role="tab"
                aria-controls="gallery-tab-pane"
                aria-selected="true"
              >
                {t("gallery")}
              </button>
            </div>
            <div className={`${style.left}`}>
              <button
                className={`${style.navGallery} nav-link`}
                id="video-tab"
                data-bs-toggle="tab"
                data-bs-target="#video-tab-pane"
                type="button"
                role="tab"
                aria-controls="video-tab-pane"
                aria-selected="false"
              >
                {t("video")}
              </button>
            </div>
          </div>
          <div className={`${style.tabContent} tab-content`} id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="gallery-tab-pane"
              role="tabpanel"
              aria-labelledby="gallery-tab"
              tabIndex={0}
            >
              <div className="container-fluid px-0">
                <div className={`${style.galleyContent}`}>
                  <ProjectImage images={gallery?.images} />
                </div>
              </div>
            </div>
            <div
              className={`${style.myVideo} tab-pane fade`}
              id="video-tab-pane"
              role="tabpanel"
              aria-labelledby="video-tab"
              tabIndex={0}
            >
              <ProjectVideo myVideo={video} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
