import React, { useState } from 'react'
import './Grind.css'

export default function Grind({getGrind, grindClose}) {
const [text, setText] = useState('');
console.log(text)

const settingGrindText = () => {
    if (text === '') {
        return (
            <div className='grindText'>
                <p>Grind Your Way.</p>
                <p>Explore Fine, Medium, and Coarse Grinds.</p>
                <p>Elevate Your Coffee Experience!</p>
            </div>
        )
    } else if (text === 'fine') {
        return (
            <div className='grindText'>
                <p>Ideal for intense espresso shots</p>
                <p>capturing intricate notes and aromas.</p>
            </div>
        )
    } else if (text === 'medium') {
        return (
            <div className='grindText'>
                <p>Slightly longer roast. Deeper, balanced flavor.</p>
                <p>Smooth taste, medium body and sweetness.</p>
                <p>Versatile for various coffee styles.</p>
            </div>
        )
    } else if (text === 'coarse') {
        return (
            <div className='grindText'>
                <p>Extended roasting. Rich, dark color.</p>
                <p>Heavy body, intensified flavor,and nutty notes.</p>
                <p>Great for espresso-style coffee.</p>
            </div>
        )
    }
}

  return (
    <div className='grindContainer'>
        <div className='grindTitle'>
            <header>Grind Size</header>
        </div>
        <div className='grindChoices'>
            <div onClick={() => {setText('fine')}}>Fine</div>
            <div onClick={() => {setText('medium')}}>Medium</div>
            <div onClick={() => {setText('coarse')}}>Coarse</div>
        </div>
        {settingGrindText()}
        <button onClick={() => {getGrind(text); grindClose(false)}}>Save It!</button>
    </div>
  )
}
