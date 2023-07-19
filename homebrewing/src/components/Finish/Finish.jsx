import React from 'react'
import './Finish.css'

import { Link, useParams, useLocation } from 'react-router-dom'

export default function Finish() {

  const { userName } = useParams();
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className='finishContainer'>
        <div className='finishContents'>
          <div className='finishText'>
            <header>How was your Coffee today?</header>
            <div className='pContainer'>
              <p>It is a long established fact that a reader will be distracted</p>
              <p>it look like readable English. Many desktop</p>
              <p>publishing packages and web page</p>
            </div>
            <div className='btnContainer'>
              <button className='recipe' onClick={
                localStorage.setItem
              }>Save Recipe</button>
              <Link to={`/login/${userName}`} className='tryAnother'>
                Try Another
              </Link>
              <button className='shop'>Explore Shop</button>
            </div>
          </div>
        </div>
    </div>
  )
}
