import React from 'react'
import './Brewing.css'
import StuffList from './components/StuffList/StuffList';
import Steps from './components/Steps/Steps';

export default function Brewing() {

  return (
    <div className='brewingContainer'>
      <div className='brewing'>
          <StuffList />
          <Steps/>
      </div>
    </div>
  )
}
