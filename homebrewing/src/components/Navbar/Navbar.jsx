import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Slide Menu component (react-bootstrap)
import SlideMenu from './SlideMenu/SlideMenu'
import Nav from './Nav/Nav'

export default function Navbar() {
  const isLogIn = useSelector((state) => state.logIn);
  console.log("In redux store: ", isLogIn)
  const dispatch = useDispatch();


  //render differrent Link element depends on LoggedIn
  const settingMyRecipe = () => {
    if (isLogIn === false) {
      return (
        <Link className='myRecipe' to={'/login'}>My Recipe</Link>
      )
    } else if (isLogIn === true) {
      return (
        <Link className='myRecipe' to={`/myRecipe`}>My Recipe</Link>
      )
    }
  }
 

  return (
    <div className='fixedNavbar'>
      <div className='guide'>
        <SlideMenu/>
      </div>
      <div className='shop'
      ><Nav/></div>
      <Link className='navTitle' to={isLogIn ? `/` : '/'}>For Homey Barista</Link>
      {settingMyRecipe()}
      {isLogIn ? <Link className='account' to={'/'}
      onClick={() => {

        //update info from local storage
        const localInfo = localStorage.getItem('userInfo');
        const userInfo = JSON.parse(localInfo);
        userInfo.isLoggedIn = false;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        //give logOut info to redux store
        dispatch({ type : 'loggedOut'}

        )}}
      >Log Out</Link> : <Link className='login' to={'./login'}>Log In</Link>}
    </div>
  )
}