import React from 'react'
import './Step7.css'

import { Link, useParams } from 'react-router-dom'

export default function Step7() {

    const { menuName, methodName, water, coffee, roasting ,grind} = useParams()

  return (
    <div className='brewingContainer'>
        <div className='step7'>
            <header>Step 7. Make Flat White</header>
            <img src="/img/coffee/flatWhite2.jpg" alt="step7" />
            <div className='step7Text'>
                <p>Put espresso in 180ml sized cup. And pour milkfoam on the top until full-filled!</p>
                <p>Remember, ratio is 7 : 3. 7 for milk, 3 for espresso.</p>
                <p>Also you know latte art doesn't effect for taste. Enjoy!</p>
            </div>
            <div className='btnContainer'>
                <Link id='backBtn' to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${water}/${roasting}/${grind}/step6`}>
                <button>Back</button>
                </Link>
                <Link id='nextBtn' to={`/menu/${menuName}/method/${methodName}/recipe/brewing/${water}/${coffee}/${roasting}/${grind}/finish`}>
                <button>Finish</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
