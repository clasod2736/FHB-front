import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

//Slide Menu component (react-bootstrap)
import SlideMenu from './SlideMenu/SlideMenu'

 export default function Navbar() {
  const isLogin = useSelector((state) => state.login);

  return (
    <div className='fixedNavbar'>
      <button className='guide'>
        <SlideMenu/>
      </button>
      <Link className='myRecipe'>My Recipe</Link>
      <Link className='navTitle' to={'/'}>For Home Barista</Link>
      <Link className='shop'>Shop</Link>
      {isLogin ? <Link className='account'>Account</Link> : <Link className='login' to={'./login'}>Log In</Link>}
    </div>
  )
}