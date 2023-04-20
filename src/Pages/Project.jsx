import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectId } from "../store/ProjectId.Slice";
import ProjectBanner from "../Components/ProjectsComponents/ProjectBanner/ProjectBanner";
import ProjectTitle from "../Components/ProjectsComponents/ProjectTitle/ProjectTitle";
import Statistics from "../Components/ProjectsComponents/Statistics/Statistics";
import ProjectGallery from "../Components/ProjectsComponents/ProjectGallery/ProjectGallery";
import AnimatedRoutes from "./AnimatedRoutes";
import ProGallery from "../Components/ProjectsComponents/ProGallery/ProGallery";

export default function Project() {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.projectId);
  const { data } = useSelector((state) => state.project);
  const { lang } = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getProjectId(lang));
  }, [dispatch, lang]);
  return (
    <>
      <AnimatedRoutes />
      <ProjectBanner banner={data?.banner} />
      <ProjectTitle statistics={info?.statistics} />
      <Statistics statistics={info?.statistics.cards} />
      {info?.videos ? (
        <ProjectGallery gallery={info?.images} video={info?.videos.videos} />
      ) : (
        <ProGallery gallery={info?.images.images} />
      )}
    </>
  );
}
