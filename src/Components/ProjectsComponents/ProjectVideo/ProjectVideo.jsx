import React from "react";
import style from "./ProjectVideo.module.scss";
import ReactPlayer from "react-player/lazy";

export default function ProjectVideo({ myVideo }) {
  console.log(myVideo);
  return (
    <div className={`${style.galleryVideo}`}>
      <ReactPlayer
        url={myVideo}
        controls
        playing={true}
        muted
        volume={1}
        autoPlay
        className={`${style.myvideo}`}
      />
    </div>
  );
}
