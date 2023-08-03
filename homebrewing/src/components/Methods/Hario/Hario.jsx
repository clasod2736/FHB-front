import React from 'react'
import './Hario.css'
import { useNavigate } from 'react-router-dom'

export default function Aeropress({ getMethod, method }) {

const navigate = useNavigate()

  return (
    <div className='harioContainer'>
        <div className='harioOutline'>
              <div className='harioOutlineText'>
                <header>Hario V6</header>
                <p>The Hario V60 is a manual drip coffee maker made</p>
                <p>from iconic heat-resistant glass.</p>
                <p>Its intricate design allows precise extraction.</p>
                <p>Experience delicate bean flavors</p>
                <p>and aromas with this choice.</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#PourOver</p>
                  <p>#DripDelights</p>
                  <p>#CraftedCoffee</p>
                </span>
                <span>
                  <p>#BeanExpression</p>
                  <p>#AromaUnleashed</p>
                  <p>#BrewingMastery</p>
                </span>
              </div>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={() => {navigate(`./${method}/recipe`)}}
                >Choose Hario V6</button>
              </span>
        </div>
        <div className='videoContainer'>
          <iframe width="100%" height="100%"
          src="https://www.youtube.com/embed/wJPAoplu_1I"
          title="Simple Hario V60 Brew Method - My Everyday Recipe"
          frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    </div>
  )
}
