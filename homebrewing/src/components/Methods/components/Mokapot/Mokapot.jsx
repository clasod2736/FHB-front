import React from 'react'
import './Mokapot.css'
import { useNavigate } from 'react-router-dom'

export default function Mokapot({ getMethod, method, isMobile }) {

const navigate = useNavigate()

const settingMobile = () => {
  if (isMobile) {
    return (
      <div className='mokapotContainerMobile'>
        <div className='videoContainer'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zzlFOkD4Kz4"
          title="Bialetti - How to Moka" frameBorder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='mokapotOutline'>
            <div className='mokapotOutlineText'>
              <header>Moka Pot</header>
              <p>The Moka Pot, an Italian classic, brews</p>
              <p>coffee by pressurizing hot water through coffee grounds.</p>
              <p>It offers a distinct flavor between Americano and espresso</p>
              <p>capturing the essence of both methods.</p>
            </div>
            <div className='hashtag'>
              <span>
                <p>#Espresso</p>
                <p>#Crema</p>
                <p>#Portable</p>
                <p>#Italiancoffee</p>
              </span>
              <span>
                <p>#Bialetti</p>
                <p>#Durabillity</p>
                <p>#Easytomake</p>
              </span>
            </div>
            <span className='btnContainer'>
              <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
              <button className='recipeBtn'
              onClick={() => {navigate(`./${method}/recipe`);}}
              >Choose Moka Pot</button>
            </span>
          </div>
      </div>
    )
  }
}

  return (
    <div className='mokapotContainer'>
        <div className='mokapotOutline'  style={{display: isMobile ? 'none' : 'flex'}}>
          <div className='mokapotOutlineText'>
            <header>Moka Pot</header>
            <p>The Moka Pot, an Italian classic, brews</p>
            <p>coffee by pressurizing hot water through coffee grounds.</p>
            <p>It offers a distinct flavor between Americano and espresso</p>
            <p>capturing the essence of both methods.</p>
          </div>
          <div className='hashtag'>
            <span>
              <p>#Espresso</p>
              <p>#Crema</p>
              <p>#Portable</p>
              <p>#Italiancoffee</p>
            </span>
            <span>
              <p>#Bialetti</p>
              <p>#Durabillity</p>
              <p>#Easytomake</p>
            </span>
          </div>
          <span className='btnContainer'>
            <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
            <button className='recipeBtn'
            onClick={() => {navigate(`./${method}/recipe`);}}
            >Choose Moka Pot</button>
          </span>
        </div>
        <div className='videoContainer'  style={{display: isMobile ? 'none' : 'flex'}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zzlFOkD4Kz4"
        title="Bialetti - How to Moka" frameBorder="0"
        allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        {settingMobile()}
    </div>
  )
}
