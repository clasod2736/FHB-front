import React from 'react'
import './Finish.css'

import FinalLogo from './FinalLogo/FinalLogo'

export default function Finish() {
  return (
    <div className='finishContainer'>
        <div className='finishContents'>
            {/* <svg width={'85%'} height={'65%'} viewBox='25 230 450 100'> */}
                <FinalLogo/>
            {/* </svg> */}
            <div className='btnContainer'>
                <button id='favourite'>Save This Coffee.</button>
                /
                <button id='restart'>Try different!</button>
                /
                <button id='shop'>Want to buy Something?</button>
            </div>
        </div>
    </div>
  )
}
