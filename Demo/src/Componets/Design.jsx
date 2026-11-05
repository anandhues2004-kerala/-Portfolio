import React from 'react'
import Header from './HeaderFooter/Header'
import { Outlet } from 'react-router-dom'
import Footer from './HeaderFooter/Footer'

const Design = () => {
  return (
    <div>
        <Header/>
        
        <Outlet/>

        <Footer/>
    </div>
  )
}

export default Design