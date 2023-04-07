import React, { useEffect } from "react";
import MainProjects from "../Components/ProjectsComponents/MainProjects/MainProjects";
import { useDispatch, useSelector } from "react-redux";
import { getProjectPage } from "../store/Project.Slice";
import MainProjectsPage from "../Components/ProjectsComponents/MainProjectsPage/MainProjectsPage";
import ProjectBanner from "../Components/ProjectsComponents/ProjectBanner/ProjectBanner";

export default function ProjectsMain() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjectPage());
  }, [dispatch]);
  return (
    <>
      <ProjectBanner banner={data?.banner} />
      <MainProjectsPage thengo={data?.thengo} />
      <MainProjects projects={data?.projects.cards} />
    </>
  );
}
