import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Main() {
  return (
    <div>
        <Header/>
      
        <Outlet></Outlet>
        
        <Footer></Footer>
    </div>
  )
}
