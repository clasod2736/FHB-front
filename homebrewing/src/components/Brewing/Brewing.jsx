import React, { useState } from 'react'
import './Brewing.css'
import { useParams } from 'react-router-dom'
import StuffList from './components/StuffList/StuffList';
import Steps from './components/Steps/Steps';

export default function Brewing() {

const { menuName, methodName, coffee, water, roasting, grind } = useParams();

  return (
    <div className='brewingContainer'>
      <div className='brewing'>
          <StuffList />
          <Steps/>
      </div>
    </div>
  )
}
