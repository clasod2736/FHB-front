import React, { useEffect } from 'react'
import './Navbar.css'
import {Link ,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Slide Menu component (react-bootstrap)
import SlideMenu from './SlideMenu/SlideMenu'

export default function Navbar() {

  const {userName} = useParams();
  
  const dispatch = useDispatch();

  //get LoggedIn data from local storage 
  useEffect(() => {
    const localInfo =  localStorage.getItem('userInfo')
    const userInfo = JSON.parse(localInfo);
    const isLoggedIn = userInfo.isLoggedIn;
    console.log(userInfo);
    
    if ( isLoggedIn === true) {
      dispatch({type: 'loginSuccess'})
    }
    console.log('Local Storage :', isLoggedIn);
  }, [dispatch])

  //render differrent Link element depends on LoggedIn
  const settingMyRecipe = () => {
    if (isLogIn === false) {
      return (
        <Link className='myRecipe' to={'/login'}>My Recipe</Link>
      )
    } else if (isLogIn === true) {
      return (
        <Link className='myRecipe' to={`${userName}/myRecipe`}>My Recipe</Link>
      )
    }
  }

  const isLogIn = useSelector((state) => state.logIn);

  return (
    <div className='fixedNavbar'>
      <button className='guide'>
        <SlideMenu/>
      </button>
      {settingMyRecipe()}
      <Link className='navTitle' to={isLogIn ? `/login/${userName}` : '/'}>For Home Barista</Link>
      <Link className='shop'>Shop</Link>
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