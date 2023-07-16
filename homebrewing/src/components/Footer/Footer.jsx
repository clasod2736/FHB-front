import React from 'react'
import './Footer.css'

//images and icons
import { ReactComponent as TodaysCoffee } from '../../assets/chai2.svg'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <span className='recommend'>
          <div className='recommendTitle'>
            <h3>Today's BREW</h3>
          </div>
          <div className='recommendCoffee'>
            <svg width={'100%'} height={'100%'} viewBox='150 190 200 120'>
              <TodaysCoffee/>
            </svg>
          </div>
          <div className='recommendText'>
            <p>Chai Latte</p>
          </div>
        </span>
        <span className='footerShop'>
          <span className='products'>
              <header>Product</header>
              <li>Beans</li>
              <li>Gears</li>
              <li>Accessories</li>
              <li></li>
          </span>
          <span className='branding'>
              <header>Brands</header>
              <li>Illy Coffee</li>
              <li>Jasper Coffee</li>
              <li>Lavazza Coffee</li>
              <li>Padre Coffee</li>
          </span>
          <span className='articles'>
              <header>Article</header>
              <li>About "Crema"</li>
              <li>Pour Over vs Drip</li>
              <li>Types of coffee bean</li>
              <li>Cold brewing method</li>
          </span>
        </span>
        <span className='subscription'>
            <header>Join subscription!</header>
            <input type="text" placeholder='Email'/>
            <div className='subsBtnContainer'>
              <button>Subscribe</button>
            </div>
            <p>Developed by Joon Park</p>
            <div className='social'>
              <BsFacebook className='socialBtn'/>
              <BsInstagram className='socialBtn'/>
              <BsTwitter className='socialBtn'/>
              <BsGithub className='socialBtn'/>
              <BsLinkedin className='socialBtn'/>
            </div>
        </span>
    </div>
  )
}
