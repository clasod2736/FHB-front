import React from 'react'
import './Step6.css'

import { Link, useParams } from 'react-router-dom'

export default function Step6() {

    const {userName, menuName, methodName, serve, coffee, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step6'>
            <header>Step 6. Making MilkFoam</header>
            <div className='videoContainer'>
                <video src="/video/milkfoam.mp4" controls></video>
            </div>
            <div className='step6Text'>
                <p>Making Milkfoam is sounds not easy without espresso machine.</p>
                <p>But we have few ways to make them at home.</p>           
                <p>Watch this video first and try them!</p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${roasting}/${grind}/step5`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn' to={`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${coffee}/${roasting}/${grind}/step7`}>
                <button>Next</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
