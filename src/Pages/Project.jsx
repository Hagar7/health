import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProjectId } from '../store/ProjectId.Slice';
import ProjectBanner from '../Components/ProjectsComponents/ProjectBanner/ProjectBanner';
import ProjectTitle from '../Components/ProjectsComponents/ProjectTitle/ProjectTitle';
import Statistics from '../Components/ProjectsComponents/Statistics/Statistics';
import ProjectGallery from '../Components/ProjectsComponents/ProjectGallery/ProjectGallery';

export default function Project() {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.projectId);
  const { data } = useSelector((state) => state.project);
  console.log(data);
  useEffect(() => {
    dispatch(getProjectId());
  }, [dispatch]);
  return (
    <>
    <ProjectBanner banner={data?.banner} />
    <ProjectTitle statistics={info?.statistics}/>
    <Statistics statistics={info?.statistics.cards}/>
    <ProjectGallery gallery={info?.gallery.cards}/>
    </>
  )
}
