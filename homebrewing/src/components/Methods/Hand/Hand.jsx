import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './Hand.css'

import { ReactComponent as HdIcon } from '../../../assets/handdrip.svg'

export default function Hand() {
    const { userName } = useParams();
    const { menuName } = useParams();

  return (
    <div className='handContainer'>
        <div className='headerContainer'>
            <header>Hand Drip</header>
            <svg width='120px' height='200px' viewBox=' 150 120 220 90' opacity={0.9} className='hdIcon'>
                <HdIcon/>
            </svg>
        </div>
        <div className='border'></div>
        <div className='outline'>
            <header>What is Hand drip Coffee?</header>
            <p>The hand drip technique involves pouring water through coffee grounds in a slow, circular motion.</p>
            <p>The result of making hand drip coffee as opposed to french press, or using a machine is a very smooth cup of coffee that doesn't taste acidic or bitter.</p>
        </div>
        <div className='specialties'>
            <header>Specialties</header>
            <ul>
                <li>Taste: Clean and Aromatic.</li>
                <li>Cost: comparably cheap than other coffee equipment.</li>
                <li>Serves: Could make larger serve for more poeple.</li>
                <li>Maintenance: Easy to make and clean, maybe your cup or kettle and dripper are dishwashable.</li>
            </ul>
        </div>
        <div className='necessities'>
            <header>Necesssities</header>
            <p>If you’ve purchased or plan to make a Hand drip coffee, you’ll also need the following accessories:</p>
            <ul>
                <li>Paper filters: Any coffee paper filters are okay!</li>
                <li>Cup or Kettle for storing coffee</li>
                <li>Fresh Beans</li>
            </ul>
        </div>
        <div className='dirContainer'>
            <header>Direction</header>
            <h1>1. PREPARE DRIPPER AND FILTER</h1>
            <img src="https://cdn.buttercms.com/c4oS8SFTaSaeliwlbmtP" alt="hdGif1" className='hdGif'/>
            <p>Open the paper filter so there are three layers on one side, and one layer on the other.</p>
            <p>our your heated water over the filter to preheat the carafe and set the filter in place. Called “rinsing,” this step also removes the paper smell/taste from making its way into your coffee. </p>
            <p>When you’re done rinsing, pour out the water. </p>
            <h1>2. MEASURE AND GRIND YOUR COFFEE</h1>
            <img src="https://cdn.buttercms.com/bXToi9iTaekHl1VmwpDQ" alt="hdGif1" className='hdGif' />
            <p>First, measure out 2 tablespoons (10 grams) of coffee beans for every 160ml of water.</p>
            <p>To make a 800ml of drip coffee, we'll use 10 tablespoons (50 grams) of coffee. </p>
            <p>Or...you can use your sense of coffee instead of measure!</p>
            <p></p>
            <p>"Grind the coffee" to a table salt-like consistency so the beans can fully absorb the water. This grind gives you a cleaner cup of coffee with less sediment when using a Dripper.</p>
            <h1>3. LET THE WATER COOL</h1>
            <p>If using boiling water, allow the kettle to sit off the stove for 30 seconds to cool.</p>
            <h1>4. START YOUR FIRST POUR </h1>
            <img src="https://cdn.buttercms.com/X2PvGvhQ7Z2nlhv7yhQG" alt="hdGif3" className='hdGif' />
            <p>Place your ground coffee into the filter and slowly pour over 100 grams of heated water, starting in the center and working your way out.</p>
            <p>It's important to have a slow, controlled pour, which is why we recommend using a gooseneck kettle when using the Dripper. This will be one of four pours in total.</p>
            <p>Next—the best part—let the coffee “bloom,” a process that saturates the grounds and doubles the weight of your coffee.</p>
            <p>A coffee bloom occurs when water hits the fresh coffee grounds and releases rainbow-colored bubbles of carbon dioxide from the coffee. The fresher the coffee, the longer it will bloom.</p>
            <p>Let the coffee bloom for about 30 seconds while you enjoy the heavenly aromas!</p>
            <h1>5. COMPLETE THREE MORE POURS</h1>
            <img src="https://cdn.buttercms.com/FPBXXhuXTTGouTBor9JF" alt="hdGif4" className='hdGif' />
            <p>The next three pours should be split into three equal parts. Pour your next round of water in the same concentric fashion and use about 200g of water.</p>
            <p>As the coffee drains down, repeat this for your last pour to finish up with your goal weight: 800g. </p>
            <p>Try not to let the coffee bed completely drain in between pours. You’ll want to see the coffee about 1 inch from the grounds before your next pour.</p>
            <p>If the coffee is draining too quickly, make your grind finer, and vice versa.</p>
            <h1>6. REMOVE THE FILTER, SWIRL AND SERVE</h1>
            <img src="https://cdn.buttercms.com/N8GZl3RTvmAaLzH0aeh7" alt="hdGif5" className='hdGif' />
            <p>Let the coffee finish dripping, then compost the filter.</p>
            <p> And give your carafe a swirl, pour, and enjoy!</p>
            <div className='confirmContainer'>
                <Link to={`/${userName}/menu/${menuName}/method/handdrip/bean`} className='confirmLink'>
                    Choose this method!
                </Link>
            </div>
        </div>
    </div>
  )
}
