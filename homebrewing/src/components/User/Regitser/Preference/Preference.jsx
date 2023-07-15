import React from 'react'
import './Preference.css'
import { Link, useParams } from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi'

export default function Preference({name}) {
  const { userName } = useParams();

  return (
    <div className='prefContainer'>
      <div className='preference'>
      <Link to={'/username'} className='closeBtn'><BiLeftArrowAlt/></Link>
      <header className='prefTitle'>Hi! "{userName}" Give us your preferences.</header>
      <div className='frequency'>
        <header>how often you drink coffee?</header>
          <div className='checkBoxes'>
            <label htmlFor="Everyday">Everyday</label>
            <input type="checkbox" name="everyday" id="everyday"/>
            <label htmlFor="often">Oftenly</label>
            <input type="checkbox" name="often" id="often"/>
            <label htmlFor="sometimes">Sometimes</label>
            <input type="checkbox" name="sometimes" id="sometimes"/>
          </div>
      </div>
      <div className='flavour'>
        <header>What taste you prefer for coffee?</header>
          <div className='checkBoxes'>
            <label htmlFor="rich">Rich</label>
            <input type="checkbox" name="rich" id="rich"/>
            <label htmlFor="bitter">Bitter</label>
            <input type="checkbox" name="bitter" id="bitter"/>
            <label htmlFor="sour">Sour</label>
            <input type="checkbox" name="sour" id="sour"/>
          </div>
      </div>
      <div className='menu'>
        <header>What kind of coffee you like?</header>
          <div className='checkBoxes'>
            <label htmlFor="white">White</label>
            <input type="checkbox" name="white" id="white"/>
            <label htmlFor="black">Black</label>
            <input type="checkbox" name="black" id="black"/>
            <label htmlFor="other">Other</label>
            <input type="checkbox" name="other" id="other"/>
          </div>
      </div>
    <Link to={`/${userName}/menu`} className='toMethod'>
    <button>Submit</button>
    </Link>
    </div>
    </div>
  )
}
