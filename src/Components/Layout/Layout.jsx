import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar/Navbar";
import MobileNav from "../CommonComponents/MobNav/MobNav";
import Footer from "../CommonComponents/Footer/Footer";
import CopyRight from "../CommonComponents/CopyRight/CopyRight";
import AnimatedRoutes from "../../Pages/AnimatedRoutes";

export default function Layout() {
  const [lang, setLang] = useState("");
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
