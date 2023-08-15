import React from 'react'
import './StuffList.css'

import { useParams } from 'react-router-dom'

export default function StuffList() {

  const { menuName, methodName, coffee, water, roasting, grind } = useParams();

  return (
    <div className='stuffList'>
      <div className='recipeInfo'>
        {}
      </div>
    </div>
  )
}
