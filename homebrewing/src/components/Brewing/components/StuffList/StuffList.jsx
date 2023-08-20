import React, { useEffect, useState } from 'react'
import './StuffList.css'

import { useParams, useNavigate } from 'react-router-dom'
import stuffList from '../../../../util/StuffData/StuffList.json'

export default function StuffList({isMobile, getBrewMobile}) {

  const navigate = useNavigate()

  const [menuStuffs, setMenuStuffs] = useState([])
  const [methodStuffs, setMethodStuffs] = useState([])

  const { menuName, methodName, coffee, water, roasting, grind } = useParams();

  //fetch data from json file
  useEffect(() => {
    setMenuStuffs(stuffList.menu[menuName])
    setMethodStuffs(stuffList.method[methodName])
  }, [])

  return (
    <div className='stuffListContainer'>
      <div className='recipeInfo'>
        <header>Recipe</header>
        <p>Coffeee : {menuName}</p>      
        <p>Method: {methodName}</p>
        <p>Ground Coffee: {coffee}g</p>
        <p>Water: {water}ml</p>
        <p>Roasting Level: {roasting}</p>
        <p>Grind Size: {grind}</p>
        <div className='startBrewingMobile' style={{display: isMobile ? 'flex' : 'none'}}>
          <p>Did you check everything? then...</p>
          <button onClick={() => {getBrewMobile(true);}}>Start Brewing</button>
        </div>
      </div>
      <div className='listContainer'>
        <header>Stuff List</header>
        <ul className='stuffList'>
          <li>{coffee}g of Ground Coffee</li>
          <li>{water}ml of Water</li>
          <li>Scale</li>
          <li>Cup or Mug</li>
          <li>Coffee Bean Grinder</li>
          {methodStuffs.map((method) => (
            <li key={method} >{method}</li>
          ))}
          {menuStuffs.map((menu) => (
            <li key={menu} >{menu}</li>
          ))}
        </ul>
      </div>
      <button className='backBtn' onClick={() => {navigate(-1)}} style={{display: isMobile ? 'none' : 'flex'}}>Back to Before</button>
    </div>
  )
}
