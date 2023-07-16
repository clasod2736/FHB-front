import React from 'react'
import './Intro.css'
import Logo from './Logo/Logo'
import { Link } from 'react-router-dom'

export default function Intro() {

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          {/* <Logo/> */}
        <img src="/img/background/logo.jpg" alt="logo" />
          <div className='pContainer'>
            <p className='introduce1'>Great Coffee could be powerful inspiration generator.</p>
            <p className='introduce2'>This web experience is designed for everyone who want to making a great Coffee at home.</p>
            <p className='introduce3'>Enjoy my recommendations and make a fresh start in your days!</p>
          </div>
          <div className='expContatiner'>
            <Link to='/login' className='exploreBtn'>
              Let's Brew!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}