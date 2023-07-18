import React from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link,useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);

  const { userName } = useParams();
  const name = userName

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          <Logo/>
          <div className='expContatiner'>
            <Link className='exploreBtn'>
              Make Recent Brew!
            </Link>
            <Link to={isLogIn ? `/${name}/menu` : '/login'} className='exploreBtn'>
              Make a New Brew!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}