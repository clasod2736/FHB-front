import React from 'react'
import './Step3.css'

import { Link, useParams } from 'react-router-dom'

export default function Step3({getOrder}) {

    const {userName, menuName, methodName, serve, coffee, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step3'>
            <header>Step 3. Put Moka Pot Together</header>
            <img src="https://cdn.buttercms.com/hkD6EUHRH2fFHC6RcqzZ" alt="step3" />
            <div className='step3Text'>
                <p>Remove the brewer from the scale. Screw the top and bottom together.</p>
                <p>*Note: Don't put them together too strong, otherwise it won't open.</p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step2`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn' to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${coffee}/${roasting}/${grind}/step4`}>
                <button>Next</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
