import React from 'react'
import './Root.css'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='rootContainer'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
