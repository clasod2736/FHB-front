import React, { useState } from 'react'
import './Roasting.css'

export default function Roasting({getRoasting, roastingClose}) {
const [text, setText] = useState('');
const [caution, setCaution] = useState(false);

const settingRoastingText = () => {
    if (text === '') {
        return (
            <div className='roastingText'>
                <p>Explore Our Roast Spectrum.</p>
                <p>Light, Medium, Dark. Find Your Perfect Cup!</p>
            </div>
        )
    } else if (text === 'light') {
        return (
            <div className='roastingText'>
                <p>Short roasting time.</p>
                <p>Bright fruity and floral notes.</p>
                <p>Ideal for exploring unique regional flavors.</p>
            </div>
        )
    } else if (text === 'medium') {
        return (
            <div className='roastingText'>
                <p>Slightly longer roast. Deeper, balanced flavor.</p>
                <p>Smooth taste, medium body and sweetness.</p>
                <p>Versatile for various coffee styles.</p>
            </div>
        )
    } else if (text === 'dark') {
        return (
            <div className='roastingText'>
                <p>Extended roasting. Rich, dark color.</p>
                <p>Heavy body, intensified flavor,and nutty notes.</p>
                <p>Great for espresso-style coffee.</p>
            </div>
        )
    }
}

  return (
    <div className='roastingContainer'>
        <div className='roastingTitle'>
            <header>Roasting Level</header>
        </div>
        <div className='roastingChoices'>
            <div onClick={() => {setText('light')}}>Light</div>
            <div onClick={() => {setText('medium')}}>Medium</div>
            <div onClick={() => {setText('dark')}}>Dark</div>
        </div>
        {settingRoastingText()}
        <button onClick={() => {
            if (text === '') {
                setCaution(true);
            } else {
                getRoasting(text);
                roastingClose(false);
            }
            }}>Save It!</button>
        {caution ? <p>Please choose Roasting!</p> : ''}
    </div>
  )
}
