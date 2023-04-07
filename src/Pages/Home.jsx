import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeAbout from "../Components/HomeComponents/HomeAbout/HomeAbout";
import HomeActivity from "../Components/HomeComponents/HomeActivity/HomeActivity";
import HomeFacts from "../Components/HomeComponents/HomeFacts/HomeFacts";
import HomeNews from "../Components/HomeComponents/HomeNews/HomeNews";
import HomeProject from "../Components/HomeComponents/HomeProject/HomeProject";
import Methology from "../Components/HomeComponents/Methology/Methology";
import Slider from "../Components/HomeComponents/Slider/Slider";
import { getHomePage } from "../store/Home.Slice";
import AnimatedRoutes from "./AnimatedRoutes";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);
  const  {lang}  = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getHomePage(lang));
  }, [dispatch,lang]);




  return (
    <>
      <AnimatedRoutes />
      <Slider slider={data?.slider} />
      <HomeAbout about={data?.about} />
      <HomeActivity activites={data?.activities} />
      <Methology methodology={data?.methodology.icons} />
      <HomeFacts facts={data?.facts.cards} />
      <HomeProject project={data?.project} />
      <HomeNews news={data?.news.cards} />
    </>
  );
}
