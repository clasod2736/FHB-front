import React from 'react'
import './Shop.css'

export default function Shop() {
  return (
    <div className='shopContainer'>
        <div className='shop'>
            <div className='gears'>
                <header>Coffe Gears</header>
                <div className='gearCategory'>
                        <button>Moka Pot</button>
                        <button>Chemax</button>
                        <button>Hario v6</button>
                        <button>Syphon</button>
                        <button>French Press</button>
                        <button>Aeropress</button>
                </div>
            </div>
            <div className='accessories'>
                <header>Coffee Accessories</header>
            </div>
            <div className='beans'>
                <header>Coffee Bean Brands</header>
            </div>

        </div>
    </div>
  )
}
