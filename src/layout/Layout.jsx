import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Layout = () => {
  return (
    <div className="container mx-auto w-full">
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout