import React from 'react'
import Header from './header'
import Footer from './footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <main className="max-w-screen-xl min-w-sm mx-auto">
        <Header/>
        <div className='min-h-screen'>
        <Outlet/>
        </div>
        <Footer/>
    </main>
  )
}

export default Layout