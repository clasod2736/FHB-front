import React from 'react'
import './Step2.css'

import { Link, useParams } from 'react-router-dom'

export default function Step2({getOrder}) {

    const {userName, menuName, methodName, serve, coffee, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step2'>
            <header>Step 2. Weigh Moka Pot on the Scale </header>
            <img src="https://cdn.buttercms.com/Sqc27hX1QPKJegQaFvcp" alt="step2" />
            <div className='step2Text'>
                <p>Put the metal filter basket into the brewer and place it on the scale.</p>
                <p>Tare your scale and add 25g (or 3 tablespoons) of freshly ground coffee into the filter.</p>
                <p>Give it a gentle shake to level out the grounds. *Note: don’t tamp (or compress)</p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step1`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${coffee}/${roasting}/${grind}/step3`}>
                <button>Next</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
