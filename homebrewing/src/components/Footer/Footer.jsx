import React from 'react'
import './Footer.css'

//images and icons
import { ReactComponent as ContactSvg } from '../../assets/login.svg'
import { ReactComponent as TodaysCoffee } from '../../assets/chai2.svg'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiShoppingBag} from 'react-icons/hi'
import {DiCoffeescript} from 'react-icons/di'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <div className='explore'>
          <header>More Coffee Explore<DiCoffeescript id='exploreIcon'/></header>
          <div className='exploreContents'>
            <p>Comprison of each Coffee methods.</p>
            <p>How to Choose Good coffee bean?</p>
            <p>How to make a decent milk foam at home?</p>
            <p>How to make a cold brew with cheap equipment?</p>
          </div>
        </div>
        <div className='footerShop'>
          <h1>Simple Shop Links<HiShoppingBag id='shopIcon'/></h1>
          <div className='shopLinks'>
            <span className='gears'>
                <header>Gears</header>
                <li>Mokapot</li>
                <li>Chemax</li>
                <li>French Press</li>
                <li>Hario V6</li>
                <li>Aeropress</li>
                <li>Syphon</li>
            </span>
            <span className='beans'>
                <header>Beans</header>
                <li>Illy Coffee</li>
                <li>Jasper Coffee</li>
                <li>Lavazza Coffee</li>
                <li>Padre Coffee</li>
                <li>Industry Beans</li>
                <li>More...</li>
            </span>
            <span className='accessories'>
                <header>Accessories</header>
                <li>Filters</li>
                <li>Milk Jug</li>
                <li>Frother</li>
                <li>Scale</li>
                <li>Etc</li>
            </span>
          </div>
        </div>
        <div className='contact'>
          <div className='contactImg'>
            <svg width={'100%'} height={'100%'} viewBox='180 190 150 120'>
              <ContactSvg/>
            </svg>
          </div>
          <div className='contactText'>
            <header>Hi! I'm Joon. <br/>The self-taught developer.</header>
            <p>I'm always open for learning new,</p>
            <p>communication and any opportunity.</p>
            <p>If you are interested this project,</p>
            <p>Please contact me no hesitate.</p>
            <div className='emailAddress'>
              <p>Email:</p>
              <a href="mailto:">clasod2736@gmail.com</a>
            </div>
            <div className='social'>
              <BsFacebook className='socialBtn'/>
              <BsInstagram className='socialBtn'/>
              <BsTwitter className='socialBtn'/>
              <BsGithub className='socialBtn'/>
              <BsLinkedin className='socialBtn'/>
            </div>
          </div>
        </div>
        {/* <span className='subscription'>
            <header>Join subscription!</header>
            <input type="text" placeholder='Email'/>
            <div className='subsBtnContainer'>
              <button>Subscribe</button>
            </div>
        </span> */}
    </div>
  )
}
