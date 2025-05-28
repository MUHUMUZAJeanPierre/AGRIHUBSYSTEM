import React from 'react'
import { Outlet } from 'react-router-dom'
import PreFooter from '../Component/PreFooter'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <>
      <div className=''>
        <Header/>
        <Outlet/>
        <PreFooter/>
        <Footer/>
      </div>
    </>


  )
}

export default Layout