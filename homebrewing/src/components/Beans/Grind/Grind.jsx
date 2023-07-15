import React, { useState } from 'react'
import './Grind.css'

import { ReactComponent as Grinder } from '../../../assets/coffee grinder.svg'

export default function Grind({getGrind}) {
const [active, setActive] = useState('');
getGrind(active)

const handleCoarse = (grind) => {
    if (active === grind) {
        setActive('')
    } else setActive(grind)
}
const handleMedium = (grind) => {
    if (active === grind) {
        setActive('')
    } else setActive(grind)
}
const handleFine = (grind) => {
    if (active === grind) {
        setActive('')
    } else setActive(grind)
}
const handleGrindText = () => {
    if (active === 'coarse') {
        return (
            <div className='coarseText'>
                you choose Coarse!
            </div>
        )
    } else if (active === 'medium') {
        return (
            <div className='coarseText'>
                you choose Medium!
            </div>
        )
    }
    
}

  return (
    <div className='grindContainer'>
        <div className='finesseHeader'>
            <svg height={'180px'} width={'140px'} viewBox='100 220 280 120'>
                <Grinder/>
            </svg>
            <div className='title'>
                <header>Grind Size</header>
                <p>scrambled it to make a type.</p>
                <p>variations of passages of Lorem Ipsum available</p>
            </div>
            </div>
        <div className='grindLevel'>
            <div className='grindImg'>
                <span className={active === 'coarse' ? 'coarse active' : 'coarse'} onClick={() => {handleCoarse('coarse')}}>
                Coarse
                </span>
                <span className={active === 'medium' ? 'medium active' : 'medium'} onClick={() => {handleMedium('medium')}}>
                Medium
                </span>
                <span className={active === 'fine' ? 'coarse fine' : 'fine'} onClick={() => {handleFine('fine')}}>
                Fine
                </span>
            </div>
            <div className='grindText'>
                {handleGrindText()}
            </div>
        </div>
    </div>
  )
}
