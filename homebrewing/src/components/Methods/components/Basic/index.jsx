import React, {useState} from 'react'
import './Basic.css'

//images
import { MokapotSvg, Frendpress, Handdrip, AeroPress, ChemaxSvg, SyphonSvg, GuideLogo, EspressoMachine, DripMachine, Percolator } from '../../../../assets'

export default function Basic({ isMobile, getMethod}) {
const [chooseMethod, setChooseMethod] = useState(false)

//choice container for Mobile
const settingMethodOption = () => {
    if (chooseMethod) {
        return (
            <div className='choiceContainerMobile'>
                <div className='firstRow'>
                    <div className='hario' onClick={()=>{ getMethod('harioV6')}}>
                        <svg width='100%' height='100%' viewBox=' 100 165 320 150 ' opacity='0.8'>
                        <Handdrip/>
                        </svg>
                        <p>Hario</p>
                    </div>
                    <div className='mokaPot'onClick={()=>{getMethod('mokapot')}}>
                        <svg width='100%' height='100%' viewBox=' 80 165 320 150 ' opacity='0.8'>
                        <MokapotSvg/>
                        </svg>
                        <p>Moka Pot</p>
                    </div>
                </div>
                <div className='secondRow'>
                    <div className='frenchPress' onClick={()=>{ getMethod('frenchpress')}}>
                        <svg width='100%' height='100%' viewBox=' 90 170 300 150' opacity='0.8'>
                        <Frendpress/>
                        </svg>
                        <p>French Press</p>
                    </div>
                    <div className='aeroPress' onClick={()=>{ getMethod('aeropress')}}>
                        <svg width='100%' height='100%' viewBox=' 90 170 300 150' opacity='0.7'>
                        <AeroPress/>
                        </svg>
                        <p>Aeropress</p>
                    </div>
                </div>
                <div className='thirdRow'>
                    <div className='chemax' onClick={()=>{ getMethod('chemax')}}>
                        <svg width='100%' height='100%' viewBox=' 90 160 320 150' opacity='0.7'>
                        <ChemaxSvg/>
                        </svg>
                        <p>Chemax</p>
                    </div>
                    <div className='syphon' onClick={()=>{ getMethod('syphon')}}>
                        <svg width='100%' height='100%' viewBox=' 90 170 300 150 ' opacity='0.8'>
                        <SyphonSvg/>
                        </svg>
                        <p>Syphon</p>
                    </div>
                </div>
                <button className='backBtn' onClick={() => {setChooseMethod(false)}}>Back</button>
            </div>
        )
    }
}

  return (
    <div className='basicContainer'>
        {settingMethodOption()}
        <div className='mobileLayout' style={{display: chooseMethod ? 'none' : 'flex'}}>
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
                            {isMobile ?  
                            <svg width={'80px'} height={'80px'} viewBox='130 180 250 120'>
                                <EspressoMachine/>
                            </svg>
                            :
                            <svg width={'150px'} height={'150px'} viewBox='130 180 250 120'>
                                <EspressoMachine/>
                            </svg> 
                            }
                        </a>
                        <p>Espresso Machine</p>
                    </div>
                    <div>
                        <a href="https://home.howstuffworks.com/coffee-maker.htm">
                            {isMobile ? 
                            <svg width={'80px'} height={'80px'} viewBox='130 180 250 120'>
                                <DripMachine/>
                            </svg>
                            :
                            <svg width={'150px'} height={'150px'} viewBox='130 180 250 120'>
                                <DripMachine/>
                            </svg>
                            }
                        </a>
                        <p>Drip Machine</p>
                    </div>
                    <div className='percolator'>
                        <a href="https://www.scienceabc.com/eyeopeners/what-is-a-coffee-percolator-and-how-does-it-work.html">
                            {isMobile ? 
                            <svg width={'80px'} height={'80px'} viewBox='150 180 250 120'>
                                <Percolator/>
                            </svg>
                            :
                            <svg width={'150px'} height={'150px'} viewBox='150 180 250 120'>
                                <Percolator/>
                            </svg>
                            }
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
            {isMobile ? <button onClick={() => {setChooseMethod(true)}}>Go to Choose Method!</button> : null}
        </div>
    </div>
  )
}
