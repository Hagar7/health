import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar/Navbar";
import MobileNav from "../CommonComponents/MobNav/MobNav";
import Footer from "../CommonComponents/Footer/Footer";
import CopyRight from "../CommonComponents/CopyRight/CopyRight";
import AnimatedRoutes from "../../Pages/AnimatedRoutes";
import { changeLanguage } from "../../store/Loading.Slice";
import { useDispatch } from "react-redux";


export default function Layout() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  useEffect(() => {
    dispatch(changeLanguage(lang))
  }, [dispatch,lang])
  
  return (
    <>
      <AnimatedRoutes lang={lang} />
      <Navbar setLang={setLang} />
      <MobileNav setLang={setLang}/>
      <Outlet></Outlet>
      <Footer />
      <CopyRight />
    </>
  );
}
