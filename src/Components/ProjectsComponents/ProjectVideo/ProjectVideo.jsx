import React from "react";
import style from "./ProjectVideo.module.scss";

export default function ProjectVideo({ myVideo }) {
  return (
    <div className={`${style.galleryVideo}`}>
      <video controls autoPlay muted className={`${style.myvideo}`}>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}
