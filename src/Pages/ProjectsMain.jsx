import React, { useEffect } from "react";
import MainProjects from "../Components/ProjectsComponents/MainProjects/MainProjects";
import { useDispatch, useSelector } from "react-redux";
import { getProjectPage } from "../store/Project.Slice";
import MainProjectsPage from "../Components/ProjectsComponents/MainProjectsPage/MainProjectsPage";
import ProjectBanner from "../Components/ProjectsComponents/ProjectBanner/ProjectBanner";
import AnimatedRoutes from "./AnimatedRoutes";

export default function ProjectsMain() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.project);
  const  {lang}  = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getProjectPage(lang));
  }, [dispatch,lang]);
  return (
    <>
    <AnimatedRoutes/>
      <ProjectBanner banner={data?.banner} />
      <MainProjectsPage thengo={data?.thengo} />
      <MainProjects projects={data?.projects} />
    </>
  );
}
