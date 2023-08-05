import React, { useState } from 'react'
import './Methods.css'

//images
import { ReactComponent as MokapotSvg } from '../../assets/mokapot.svg'
import { ReactComponent as Frendpress } from '../../assets/frenchpress.svg'
import { ReactComponent as Handdrip } from '../../assets/handdrip.svg'
import { ReactComponent as AeroPress } from '../../assets/aeroPress.svg'
import { ReactComponent as ChemaxSvg } from '../../assets/chemax.svg'
import { ReactComponent as SyphonSvg } from '../../assets/syphon.svg'

//Components
import Basic from './Basic/Basic'
import Mokapot from './Mokapot/Mokapot'
import Hario from './Hario/Hario'
import Frenchpress from './Frenchpress/Frenchpress'
import Aeropress from './Aeropress/Aeropress'
import Chemax from './Chemax/Chemax'
import Syphon from './Syphon/Syphon'

export default function Methods() {

  const [method, setMethod] = useState('');

  //Get state from child component as props
  const getMethod = (data) => {
    setMethod(data)
  }
  const settingMethod = () => {
    if (method === '') {
      return (
        <Basic getMethod={getMethod} method={method}/>
      )
    }
     else if (method === 'harioV6') {
      return (
        <Hario getMethod={getMethod} method={method}/>
      )
    } else if (method ==='mokapot') {
      return (
        <Mokapot getMethod={getMethod} method={method}/>
      )
    } else if (method === 'frenchpress') {
      return (
        <Frenchpress getMethod={getMethod} method={method}/>
      )
    } else if (method === 'aeropress') {
      return (
        <Aeropress getMethod={getMethod} method={method}/>
      )
    } else if (method === 'chemax') {
      return (
        <Chemax getMethod={getMethod} method={method}/>
      )
    } else if (method === 'syphon') {
      return (
        <Syphon getMethod={getMethod} method={method}/>
      )
    }
  }

  return (
    <div className='mtContainer'>
        <p className='title'>Choose Your Brewing Method.</p>
       <div className='methods'>
          <div className='choiceContainer'>
            <div className='hario' onClick={()=>{ setMethod('harioV6')}}>
              <svg width='180px' height='180px' viewBox=' 130 160 250 150 ' opacity='0.8'>
                <Handdrip/>
              </svg>
              <p>Hario</p>
            </div>
            <div className='mokaPot'onClick={()=>{setMethod('mokapot')}}>
              <svg width='180px' height='180px' viewBox=' 125 165 230 150 ' opacity='0.8'>
                <MokapotSvg/>
              </svg>
              <p>Moka Pot</p>
            </div>
            <div className='frenchPress' onClick={()=>{ setMethod('frenchpress')}}>
              <svg width='180px' height='180px' viewBox=' 120 165 230 150' opacity='0.8'>
                <Frendpress/>
              </svg>
              <p>French Press</p>
            </div>
            <div className='aeroPress' onClick={()=>{ setMethod('aeropress')}}>
              <svg width='180px' height='180px' viewBox=' 130 170 220 150' opacity='0.7'>
                <AeroPress/>
              </svg>
              <p>Aeropress</p>
            </div>
            <div className='chemax' onClick={()=>{ setMethod('chemax')}}>
              <svg width='180px' height='180px' viewBox=' 140 160 230 150' opacity='0.7'>
                <ChemaxSvg/>
              </svg>
              <p>Chemax</p>
            </div>
            <div className='syphon' onClick={()=>{ setMethod('syphon')}}>
              <svg width='180px' height='180px' viewBox=' 140 170 210 150' opacity='0.8'>
                <SyphonSvg/>
              </svg>
              <p>Syphon</p>
            </div>
          </div>
          <span className='choiceContents'>
              {settingMethod()}
          </span>
       </div>  
    </div>
  )
}
