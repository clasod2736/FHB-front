import React from 'react'
import './Frenchpress.css'
import { useNavigate } from 'react-router-dom'

export default function Aeropress({ getMethod, method, isMobile }) {

const navigate = useNavigate()

const settingMobile = () => {
  if (isMobile) {
    return (
      <div className='frenchPressContainerMobile'>
        <div className='videoContainer'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2ziSri3o8Y8"
          title="How To Use A French Press" frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='frenchPressOutline'>
              <div className='frenchPressOutlineText'>
                <header>Frenchpress</header>
                <p>The French Press is a simple yet effective</p> 
                <p>Mixing coarsely ground coffee and water</p>
                <p>Pressing the plunger produces a rich</p>
                <p>Smooth brew with balanced flavors.</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#Convenient</p>
                  <p>#PressAndSip</p>
                  <p>#Aromatic</p>
                </span>
                <span>
                  <p>#BrewingTradition</p>
                  <p>#Durabillity</p>
                  <p>#Easytomake</p>
                </span>
              </div>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={() => {navigate(`./${method}/recipe`);}}
                >Choose French Press</button>
              </span>
        </div>
      </div>
    )
  }
}

  return (
    <div className='frenchPressContainer'>
        <div className='frenchPressOutline' style={{display: isMobile ? 'none' : 'flex'}}>
              <div className='frenchPressOutlineText'>
                <header>Frenchpress</header>
                <p>The French Press is a simple yet effective</p> 
                <p>Mixing coarsely ground coffee and water</p>
                <p>Pressing the plunger produces a rich</p>
                <p>Smooth brew with balanced flavors.</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#Convenient</p>
                  <p>#PressAndSip</p>
                  <p>#Aromatic</p>
                </span>
                <span>
                  <p>#BrewingTradition</p>
                  <p>#Durabillity</p>
                  <p>#Easytomake</p>
                </span>
              </div>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={() => {navigate(`./${method}/recipe`);}}
                >Choose French Press</button>
              </span>
        </div>
        <div className='videoContainer' style={{display: isMobile ? 'none' : 'flex'}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2ziSri3o8Y8"
        title="How To Use A French Press" frameBorder="0"
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        {settingMobile()}
    </div>
  )
}
