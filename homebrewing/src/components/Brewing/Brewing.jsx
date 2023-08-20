import React, { useEffect, useState } from 'react'
import './Brewing.css'
import StuffList from './components/StuffList/StuffList';
import Steps from './components/Steps/Steps';

export default function Brewing() {
  const [width, setWidth] = useState(0);
  const [startBrewingMobile, setStartBrewingMobile] = useState(false);

//Mobile setup
const currentWidth = window.innerWidth

useEffect(() => {
  const resizeListener = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", resizeListener);
  window.addEventListener('load', resizeListener);
  setWidth(currentWidth);
}, [width]);

const isMobile = width <= 766;

//get mobile props from child component
const getBrewMobile = (value) => {
  setStartBrewingMobile(value)
}

//mobile components
const settingBrewingMobile = () => {
if (!isMobile) {
    return
} else if (isMobile && !startBrewingMobile) {
    return (
      <div className='brewingMobile'>
        <StuffList isMobile={isMobile} getBrewMobile={getBrewMobile}/>
      </div>
    )
  } else if (startBrewingMobile) {
    return (
      <div className='brewingMobile'>
        <Steps isMobile={isMobile}/>
      </div>
    )
  }
}

return (
    <div className='brewingContainer'>
      <div className='brewing' style={{display:isMobile ? 'none' : 'flex'}}>
          <StuffList isMobile={isMobile}/>
          <Steps isMobile={isMobile}/>
      </div>
      {settingBrewingMobile()}
    </div>
  )
}
