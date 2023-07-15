import React, {useState} from 'react'
import './Brewing.css'
import Step1 from './Steps/Step1/Step1'
import Step2 from './Steps/Step2/Step2'
import Step3 from './Steps/Step3/Step3'

export default function Brewing() {

  return (
    <div className='brewingContainer'>
        <Step1/>
    </div>
  )
}
