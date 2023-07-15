import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Menu from './Menu/Menu'
import { ReactComponent as NavLogo } from '../../assets/logo.svg'

 export default function Navbar() {

  return (
    <div className='fixedNavbar'>
      {/* <svg width={'250px'} height={'50'} viewBox='200 190 100 70'>
        <NavLogo/>
      </svg> */}
      <button className='guide'>
        <Menu/>
      </button>
      <Link className='shop'>Shop</Link>
      <Link className='navTitle' to={'/'}>Home Brewing</Link>
      <Link className='cart'>My Recipe</Link>
      <Link className='accounts' to={'./login'}>Log In</Link>
    </div>
  )
}