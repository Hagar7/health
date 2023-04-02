import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar/Navbar'
import MobileNav from '../CommonComponents/MobNav/MobNav'
import Footer from '../CommonComponents/Footer/Footer'
import CopyRight from '../CommonComponents/CopyRight/CopyRight'



export default function Layout() {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <Outlet></Outlet>
    <Footer/>
    <CopyRight/>
    </>
  )
}
