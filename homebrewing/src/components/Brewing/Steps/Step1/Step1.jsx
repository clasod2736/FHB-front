import React from 'react'
import './Step1.css'

import { Link, useParams } from 'react-router-dom'

export default function Step1() {

  const {userName, menuName, methodName, serve, roasting, grind} = useParams()

  return (
    <div className='brewingContainer'>
      <div className='step1'>
          <header>Step 1. Pour the Water</header>
          <img src="https://cdn.buttercms.com/FGVyfsYTlqEl6x4v80ig" alt="stpe1" />
          <div className='step1Text'>
              <p>Add your cold or heated water to the bottom of the Moka pot.</p> 
              <p>Filling to the line inside the carafe (depends on what model you have).</p>
          </div>
          <div className='btnContainer'>
            <Link id='backBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe`}>
              <button>Back</button>
            </Link>
            <Link id='nextBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step2`}>
              <button>Next</button>
            </Link>
          </div>
      </div>
    </div>
  )
}
