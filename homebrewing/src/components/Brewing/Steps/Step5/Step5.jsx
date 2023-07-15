import React from 'react'
import './Step5.css'

import { Link, useParams } from 'react-router-dom'

export default function Step5() {

    const {userName, menuName, methodName, serve, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step5'>
            <header>Step 5. Wait for the Hiss</header>
            <img src="https://cdn.buttercms.com/S52FHYpoQ0mhUAijygMf" alt="step5" />
            <div className='step5Text'>
                <p>Few meniute later, the coffee will begin to come out of the spout. Close the lid.</p>
                <p>When you hear a hissing sound, remove the Moka pot from the heat source and allow the coffee to finish brewing. </p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step4`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step6`}>
                <button>Next</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
