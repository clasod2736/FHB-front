import React, { useState } from 'react'
import './Brewing.css'
import { useParams } from 'react-router-dom'
import StuffList from './StuffList/StuffList';

export default function Brewing() {

const { menuName, methodName, coffee, water, roasting, grind } = useParams();

  return (
    <div className='brewingContainer'>
      <div className='brewing'>
        <div className='stuffListContainer'>
          <StuffList/>
        </div>
        <div className='brewSteps'>
          
        </div>
      </div>
    </div>
  )
}
