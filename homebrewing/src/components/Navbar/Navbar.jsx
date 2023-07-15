import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SlideMenu from './SlideMenu/SlideMenu'

 export default function Navbar() {

  return (
    <div className='fixedNavbar'>
      <button className='guide'>
        <SlideMenu/>
      </button>
      <Link className='shop'>Shop</Link>
      <Link className='navTitle' to={'/'}>Home Brewing</Link>
      <Link className='myRecipe'>My Recipe</Link>
      <Link className='accounts' to={'./login'}>Log In</Link>
    </div>
  )
}