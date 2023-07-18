import React from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link,useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogin = useSelector((state) => state.login);

  const {userName} = useParams();

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          <Logo/>
          <div className='expContatiner'>
            <Link to='/login' className='exploreBtn'>
              Make Recent Brew!
            </Link>
            <Link to={isLogin ? `/${userName}/menu` : '/login'} className='exploreBtn'>
              Make a New Brew!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}