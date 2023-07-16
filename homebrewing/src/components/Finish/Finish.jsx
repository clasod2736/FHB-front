import React from 'react'
import './Finish.css'

// import {ReactComponent as FinalLogo} from '../../assets/finalLogo2.svg'

export default function Finish() {
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
              <button className='recipe'>Save Recipe</button>
              <button className='coffee'>Try Another</button>
              <button className='shop'>Explore Shop</button>
            </div>
          </div>
        </div>
    </div>
  )
}
