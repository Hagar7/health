import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/AboutComponents/Banner/Banner";
import Founder from "../Components/AboutComponents/Founder/Founder";
import Mission from "../Components/AboutComponents/Mission/Mission";
import Objectives from "../Components/AboutComponents/Objectives/Objectives";
import SehtnaStart from "../Components/AboutComponents/SehtnaStart/SehtnaStart";
import { getAboutPage } from "../store/About.Slice";
import Partners from "../Components/AboutComponents/Partners/Partners";
import AboutCover from "../Components/AboutComponents/AboutCover/AboutCover";
import Team from "../Components/AboutComponents/Team/Team";
import AnimatedRoutes from "./AnimatedRoutes";

export default function About() {
  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.about);
  const  {lang}  = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getAboutPage(lang));
  }, [dispatch,lang]);

  return (
    <>
      <AnimatedRoutes />
      <Banner />
      <SehtnaStart sehetnaStart={data?.sehetnaStart} />
      <Founder founder={data?.founder} />
      <Mission qualities={data?.qualities.cards} />
      <Objectives objectives={data?.objectives.objectives} />
      <Partners Partners={data?.partners.cards} />
      <AboutCover establishment={data?.establishment} />
      <Team board={data?.board.cards} />
    </>
  );
}
