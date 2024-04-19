import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Sidebar from './sidebar'

type Props = {}

const SettingsLayout = (props: Props) => {
  return (
    <main className="max-w-screen-xl min-w-sm mx-auto">
        <Header/>
        <div className='mt-16 h-screen rounded-lg border p-10 min-w-[835px]'>
            <div className='mb-8'>
                <div className="space-y-0.5">
                <h1 className='text-2xl font-bold tracking-tight'>Settings</h1>
                <p className='text-muted-foreground text-sm'>Manage your account settings and set e-mail preferences</p>
                </div>
                <div data-orientation="horizontal" role="none" className="mt-5 shrink-0 bg-border h-[1px] w-full"></div>
            </div>
            <div className='flex mt-3 gap-3'>
                <div className='w-[20%]'>
                <Sidebar/>
                </div>
            <div className='w-[60%] h-full'>
            <Outlet/>
            </div>
            
            </div>
            
        </div>
        <Footer/>
    </main>
  )
}

export default SettingsLayout