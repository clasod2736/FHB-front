import React, { useState } from 'react'
import './Grind.css'

export default function Grind({getGrind, grindClose}) {
const [text, setText] = useState(false);

const settingGrindText = () => {
    if (text === false) {
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
                <p style={{fontWeight: 'bold'}}>0.2mm ~ 0.4mm</p>
                <p>Tailored for espresso.</p>
                <p>Delivers a bold and concentrated taste experience.</p>
            </div>
        )
    } else if (text === 'medium') {
        return (
            <div className='grindText'>
                <p style={{fontWeight: 'bold'}}>0.5mm ~ 0.9mm</p>
                <p>Versatile grind suits drip methods.</p>
                <p>Balancing strength and clarity.</p>
            </div>
        )
    } else if (text === 'coarse') {
        return (
            <div className='grindText'>
                <p style={{fontWeight: 'bold'}}>Bigger Than 1.00mm</p>
                <p>Perfect for French press.</p>
                <p>Offering bold flavors and rich texture.</p>
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
            <div onClick={() => {setText('fine')}} style={{backgroundColor: text === 'fine' ? 'burlywood' : ''}}>Fine</div>
            <div onClick={() => {setText('medium')}} style={{backgroundColor: text === 'medium' ? 'burlywood' : ''}}>Medium</div>
            <div onClick={() => {setText('coarse')}} style={{backgroundColor: text === 'coarse' ? 'burlywood' : ''}}>Coarse</div>
        </div>
        {settingGrindText()}
        <button onClick={() => {
                grindClose(false);
                getGrind(text);
            }}>Save It!</button>
    </div>
  )
}
