import React from 'react'
import { Outlet } from 'react-router-dom'
import CopyRight from '../CopyRight/CopyRight'
import Footer from '../Footer/Footer'
import MobileNav from '../MobNav/MobNav'
import Navbar from '../Navbar/Navbar'

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
