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
                <span>
                    <p style={{ marginBottom:'0'}}>Still if you are hard to choose, this link might need help.</p>
                    <a href="https://www.homegrounds.co/the-complete-guide-to-coffee-brewing-methods/">Link</a>
                </span>
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
                    <svg width={'150'} height={'150px'} viewBox='130 180 250 120'>
                        <EspressoMachine/>
                    </svg>
                    <p>Espresso Machine</p>
                </div>
                <div>
                    <svg width={'150px'} height={'150px'} viewBox='130 180 250 120'>
                        <DripMachine/>
                    </svg>
                    <p>Drip Machine</p>
                </div>
                <div className='percolator'>
                    <svg width={'150px'} height={'150px'} viewBox='150 180 250 120'>
                        <Percolator/>
                    </svg>
                    <p>Percolator</p>
                </div>
            </span>
            <div className='otherMethodsText'>
                <header>More Methods...</header>
                <p>voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                <p>architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain </p>
            </div>
        </span>
    </div>
  )
}
