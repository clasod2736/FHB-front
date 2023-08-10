import React from 'react'
import './Chemax.css'
import { useNavigate } from 'react-router-dom'

export default function Chemax({ getMethod, method, isMobile }) {

const navigate = useNavigate()

const settingMobile = () => {
  if (isMobile) {

    return(
      <div className='chemaxContainerMobile'>
        <div className='videoContainer'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A2oipi1dEIw"
          title="How to Brew - Chemex Pour Over" frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='chemaxOutline'>
          <div className='chemaxOutlineText'>
            <header>Chemax</header>
            <p>The Chemex, a glass coffee maker</p>
            <p>uses filter method for a distinct sip.</p>
            <p>Prioritizing a clean, clear taste</p>
            <p>It combines visual appeal with a unique coffee experience.</p>
          </div>
          <div className='hashtag'>
            <span>
              <p>#Americano</p>
              <p>#Aromatic</p>
              <p>#Fragile</p>
              <p>#FilterCraft</p>
            </span>
            <span>
              <p>#Chemax</p>
              <p>#CoffeeAlchemy</p>
              <p>#Seinsitive</p>
            </span>
          </div>
          <span className='btnContainer'>
            <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
            <button className='recipeBtn'
            onClick={() => {navigate(`./${method}/recipe`);}}
            >Choose Chemax</button>
          </span>
        </div>
      </div>
    )
  }
}

  return (
    <div className='chemaxContainer'>
        <div className='chemaxOutline'  style={{display: isMobile ? 'none' : 'flex'}}>
          <div className='chemaxOutlineText'>
            <header>Chemax</header>
            <p>The Chemex, a glass coffee maker</p>
            <p>uses filter method for a distinct sip.</p>
            <p>Prioritizing a clean, clear taste</p>
            <p>It combines visual appeal with a unique coffee experience.</p>
          </div>
          <div className='hashtag'>
            <span>
              <p>#Americano</p>
              <p>#Aromatic</p>
              <p>#Fragile</p>
              <p>#FilterCraft</p>
            </span>
            <span>
              <p>#Chemax</p>
              <p>#CoffeeAlchemy</p>
              <p>#Seinsitive</p>
            </span>
          </div>
          <span className='btnContainer'>
            <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
            <button className='recipeBtn'
            onClick={() => {navigate(`./${method}/recipe`);}}
            >Choose Chemax</button>
          </span>
        </div>
        <div className='videoContainer' style={{display: isMobile ? 'none' : 'flex'}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A2oipi1dEIw"
        title="How to Brew - Chemex Pour Over" frameBorder="0"
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        {settingMobile()}
    </div>
  )
}
