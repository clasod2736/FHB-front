import React, {useState} from 'react'
import './Roasting.css'
import { BiSolidCoffeeBean } from 'react-icons/bi'
import { FaRegThumbsUp } from 'react-icons/fa'
import {ReactComponent as RoastingSvg} from '../../../assets/roasting.svg'

export default function Roasting({ getRoasting }) {
const [roasting, setRoasting] = useState('');
getRoasting(roasting);

  const handleDark = (data) => {
    if (roasting === data) {
      setRoasting('')     
    } else setRoasting(data)
  }
  const handleMedium = (data) => {
    if (roasting === data) {
      setRoasting('')     
    } else setRoasting(data)
  }
  const handleLight = (data) => {
    if (roasting === data) {
      setRoasting('')     
    } else setRoasting(data)
  }

  const settingText = () => {
    if (roasting === 'dark') {
      return (
        <div className='darkText'>
          <header>Dark</header>
          <div className='darkIntro' >
            <p>Generated Lorem Ipsum is therefore always free</p>
            <p>chunks as necessary, making this</p>
            <p>is therefore always</p>
          </div>
          <div className='darkMeter' >
            <span className='darkCharacter' >
              <li style={{ letterSpacing: '3px' }}>Acidty</li>
              <li>Bitterness</li>
              <li style={{ letterSpacing: '2px' }}>Oilness</li>
            </span>
            <span className='darkLevel' >
              <li><BiSolidCoffeeBean/></li>
              <li><BiSolidCoffeeBean style={{ marginRight: '10px'}}/><BiSolidCoffeeBean style={{ marginRight: '10px'}}/><BiSolidCoffeeBean style={{ marginRight: '10px'}}/></li>
              <li><BiSolidCoffeeBean style={{ marginRight: '10px'}}/><BiSolidCoffeeBean style={{ marginRight: '10px'}}/><BiSolidCoffeeBean style={{ marginRight: '10px'}}/></li>
            </span>
            <span className='bestFor' >
              <FaRegThumbsUp color='sienna' viewBox='0 120 650 220'/>
              <p>Espresso</p>
              <p>White</p>
            </span>
          </div>
        </div>
      )
    } else if (roasting === 'dark') {

    }
  }

  return (
    <div className='roastingContainer'>
      <div className='roastingHeader'>
        <div className='roastingSvg'>
          <svg width={'130px'} height={'150px'} viewBox='150 180 200 120'>
          <RoastingSvg/>
          </svg>
        </div>
        <div className='roastingContent'>
          <h1>Roasting</h1>
          <p>it like readable English.</p>
          <p>using, content here', it like readable English.</p>
        </div>
      </div>
      <div className='roasting'>
        <div className={roasting === 'dark' ? 'dark active' : 'dark'}
        onClick={()=> handleDark('dark')}>
          Dark
        </div>
        <div className='medium' onClick={() => handleMedium('medium')}>
          Medium
        </div>
        <div className='light' onClick={() => handleLight('light')}>
          Light
        </div>
      </div>
      <div className='roastingText'>
        {settingText()}
      </div>
    </div>
  )
}
