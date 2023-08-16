import React, { useEffect, useState } from 'react'
import './StuffList.css'

import { useParams } from 'react-router-dom'
import stuffList from '../../../../util/StuffData/StuffList.json'

export default function StuffList() {
  const [menuStuffs, setMenuStuffs] = useState([])
  const [methodStuffs, setMethodStuffs] = useState([])

  const { menuName, methodName, coffee, water, roasting, grind } = useParams();

  useEffect(() => {
    const menu = Object.keys(stuffList.menu).find(menu => menu === menuName);
    const method = Object.keys(stuffList.method).find(method => method === methodName);
    setMenuStuffs(stuffList.menu[menu])
    setMethodStuffs(stuffList.method[method])
    console.log(menuStuffs, methodStuffs)
  })

  return (
    <div className='stuffListContainer'>
      <div className='recipeInfo'>
        <header>Recipe</header>
        <p>Coffeee : {menuName}</p>      
        <p>Method: {methodName}</p>
        <p>Ground Coffee: {coffee}g</p>
        <p>Water: {water}ml</p>
        <p>Bean Roasting Level: {roasting}</p>
        <p>Bean Grind Size: {grind}</p>
      </div>
      <ul className='stuffList'>
        {menuStuffs.map((stuff, index) => (
          <li key={stuff} >{coffee} + {stuff}</li>
        ))}
      </ul>
    </div>
  )
}
