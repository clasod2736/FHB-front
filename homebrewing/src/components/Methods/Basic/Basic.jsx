import React from 'react'
import './Basic.css'

import { ReactComponent as GuideLogo } from '../../../assets/guidePeople.svg'
import { ReactComponent as EspressoMachine } from '../../../assets/espressoMachine.svg'
import { ReactComponent as DripMachine } from '../../../assets/dripMachine.svg'
import { ReactComponent as Percolator } from '../../../assets/percolator.svg'


export default function Basic() {
  return (
    <div className='basicContainer'>
        <span className='outline'>
            <div className='outlineText'>
                <header>Guide</header>
                <p>Hello there!! hard to choose gear?? first, click gear icon and check information.</p>
                <p>Then compare all the informations and choose one that most suite you!</p>
                <p>And if you choose method you like, just press "go to recipe" and start brewing!</p>
                    <p style={{ marginBottom:'0'}}>Still if you are hard to choose, this link might need help.</p>
                    <a href="https://www.homegrounds.co/the-complete-guide-to-coffee-brewing-methods/">
                        Coffee Brewing Methods: 19 Ways To Brew Amazing Coffee</a>
            </div>
            <div className='guideSvg'>
                <svg width={'400px'} height={'245px'} viewBox='120 185 310 120'>
                    <GuideLogo/>
                </svg>
            </div>
        </span>
        <span className='otherMethodsContainer'>
            <span className='otherMethods'>
                <div>
                    <a href="https://www.kitchenaid.com/pinch-of-help/countertop-appliances/how-to-use-an-espresso-machine.html">
                        <svg width={'150'} height={'150px'} viewBox='130 180 250 120'>
                            <EspressoMachine/>
                        </svg>
                    </a>
                    <p>Espresso Machine</p>
                </div>
                <div>
                    <a href="https://home.howstuffworks.com/coffee-maker.htm">
                        <svg width={'150px'} height={'150px'} viewBox='130 180 250 120'>
                            <DripMachine/>
                        </svg>
                    </a>
                    <p>Drip Machine</p>
                </div>
                <div className='percolator'>
                    <a href="https://www.scienceabc.com/eyeopeners/what-is-a-coffee-percolator-and-how-does-it-work.html">
                        <svg width={'150px'} height={'150px'} viewBox='150 180 250 120'>
                            <Percolator/>
                        </svg>
                    </a>
                    <p>Percolator</p>
                </div>
            </span>
            <div className='otherMethodsText'>
                <header>More Methods...</header>
                <p>Of course We have a few more method for brewing coffee.</p>
                <p>Here is 3 extra methods which is not really easy to try at home or less popular.</p>
                <p>If you click each method image then explore relative web-site link, and find out more information!</p>
            </div>
        </span>
    </div>
  )
}
