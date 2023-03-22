import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeAbout from "../Components/HomeAbout/HomeAbout";
import HomeActivity from "../Components/HomeActivity/HomeActivity";
import HomeFacts from "../Components/HomeFacts/HomeFacts";
import HomeNews from "../Components/HomeNews/HomeNews";
import HomeProject from "../Components/HomeProject/HomeProject";
import Methology from "../Components/Methology/Methology";
import Slider from "../Components/Slider/Slider";
import { getHomePage } from "../store/Home.Slice";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);

  return (
  <>
  <Slider slider={data?.slider} />
  <HomeAbout about={data?.about}/>
  <HomeActivity activites={data?.activites}/>
  <Methology methodology={data?.methodology.icons}/>
  <HomeFacts facts={data?.facts.cards}/>
  <HomeProject project={data?.project}/>
  <HomeNews news={data?.news.cards}/>
  </>
  )
}
