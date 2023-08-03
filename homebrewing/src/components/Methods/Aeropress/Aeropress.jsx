import React from 'react'
import './Aeropress.css'
import { useNavigate } from 'react-router-dom'

export default function Aeropress({ getMethod, method }) {

const navigate = useNavigate()

  return (
    <div className='aeropressContainer'>
        <div className='aeropressOutline'>
              <div className='aeropressOutlineText'>
                <header>Aeropress</header>
                <p>The AeroPress is a portable marvel with</p>
                <p>Versatile brewing techniques.</p>
                <p>Its piston plunging method creates a rich, clean taste profile</p>
                <p>Making it perfect for varied coffee lovers.</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#Convenient</p>
                  <p>#Softtaste</p>
                  <p>#Compact</p>
                  <p>#Aromatic</p>
                </span>
                <span>
                  <p>#Aeropress</p>
                  <p>#Durabillity</p>
                  <p>#Easytomake</p>
                </span>
              </div>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={() => {navigate(`./${method}/recipe`);}}
                >Choose Aeropress</button>
              </span>
        </div>
        <div className='videoContainer'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tRIX9G7D_9Q"
        title="How To: AeroPress®" frameBorder="0"
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>
  )
}
