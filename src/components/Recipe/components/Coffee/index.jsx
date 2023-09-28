import React, { useState, useEffect } from 'react'
import './Coffee.css'

export default function Coffee({ getCoffee, coffeeClose }) {
    const [serve, setServe] = useState(1)
    const [text, setText] = useState(false);

    useEffect(() => {
        serve > 0 ?
        setText(serve * 20)
        :
        <div></div>
    }, [serve])

  return (
    <div className='coffeeContainer'>
        <header>Ground Coffee</header>
        <div className='coffeeText'>
            <p style={{fontWeight: 'bold'}}>20g for 1 Serve +- 2~3g</p>
            <p>20g is adjust amount for 1 cup of Coffee</p>
        </div>
        <div className='coffeeForm'>
            <button onClick={() => {
                if (serve < 1) {
                    return
                }
                setServe((prev) => prev - 1);
                }}>-</button>
            <p>{serve}</p>
            <button onClick={() => {
                if (serve > 9) {
                    return
                }
                setServe((prev) => prev + 1);
                }}>+</button>
        </div>
        <p className='coffeeAmount'>Your Coffee Amount is {serve * 20}g</p>
        <button className='saveBtn' onClick={() => {
                    coffeeClose(false);
                    getCoffee(text);
            }}>Save It!</button>
    </div>
  )
}
