import React from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link } from 'react-router-dom'

export default function Intro() {

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          <Logo/>
          <div className='expContatiner'>
            <Link to='/login' className='exploreBtn'>
              Make Recent Brew!
            </Link>
            <Link to='/login' className='exploreBtn'>
              Make a New Brew!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}