import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link ,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Slide Menu component (react-bootstrap)
import SlideMenu from './SlideMenu/SlideMenu'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {userName} = useParams();
  
  const dispatch = useDispatch();

  //get LoggedIn fact from local storage
  useEffect(() => {
    const localInfo =  localStorage.getItem('userInfo')
    const userInfo = JSON.parse(localInfo);
    const isLoggedIn = userInfo.isLoggedIn;
    console.log(userInfo);
    dispatch({type: 'loginSuccess'})
    console.log('Local Storage :', isLoggedIn);
    setIsLoggedIn(isLoggedIn);
  }, [])

  const isLogIn = useSelector((state) => state.logIn);
  console.log(isLogIn)

  return (
    <div className='fixedNavbar'>
      <button className='guide'>
        <SlideMenu/>
      </button>
      <Link className='myRecipe'>My Recipe</Link>
      <Link className='navTitle' to={isLogIn ? `/login/${userName}` : '/'}>For Home Barista</Link>
      <Link className='shop'>Shop</Link>
      {isLogIn ? <Link className='account' to={'/'}
      onClick={() => {

        //update info from local storage
        const localInfo = localStorage.getItem('userInfo');
        const userInfo = JSON.parse(localInfo);
        userInfo.isLoggedIn = false;
        setIsLoggedIn(false);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        //give logOut info to redux store
        dispatch({ type : 'loggedOut'}
        )}}
      >Log Out</Link> : <Link className='login' to={'./login'}>Log In</Link>}
    </div>
  )
}