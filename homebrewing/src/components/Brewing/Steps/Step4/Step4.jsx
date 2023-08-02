import React from 'react'
import './Step4.css'

import { Link, useParams } from 'react-router-dom'

export default function Step4() {

    const {userName, menuName, methodName, serve, coffee, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step4'>
            <header>Step 4. Turn on the Heat</header>
            <img src="https://cdn.buttercms.com/0UsCiHJzTTab2hCyC8qB" alt="step3" />
            <div className='step4Text'>
                <p>Turn on your heat source to medium-low and put the Moka pot on top.</p>
                <p>Let lid keep open and make sure the handle is not subjected to the heat.</p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step3`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn'to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${coffee}/${roasting}/${grind}/step5`}>
                <button>Next</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
