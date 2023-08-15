import React, { useState } from 'react'
import './Recipe.css'
import { useNavigate, useParams } from 'react-router-dom'

import Roasting from './components/Roasting/Roasting'
import Grind from './components/Grind/Grind'
import Coffee from './components/Coffee/Coffee'
import Water from './components/Water/Water'

//Svg files
import {ReactComponent as UserMenu} from '../../assets/userMenu.svg'
import {ReactComponent as UserMethod} from '../../assets/userMethod.svg'

export default function Recipe() {

    const navigate = useNavigate();
    const { menuName, methodName } = useParams();

    //States for saving Recipes
    const [water, setWater] = useState(false);
    const [roasting, setRoasting] = useState(false);
    const [grind, setGrind] = useState(false);
    const [coffee, setCoffee] = useState(false);

    //States for choosing options
    const [roastingOpen, setRoastingOpen] = useState('');
    const [grindOpen, setGrindOpen] = useState('');
    const [waterOpen, setWaterOpen] = useState('');
    const [coffeeOpen, setCoffeeOpen] = useState('');

//get props from components
const getWater = (water) => {
    setWater(water)
}
const waterClose = (waterClose) => {
    setWaterOpen(waterClose)
}
const getRoasting = (roasting) => {
    setRoasting(roasting)
}
const roastingClose = (roastingClose) => {
    setRoastingOpen(roastingClose)
}
const getGrind = (grind) => {
    setGrind(grind)
}
const grindClose =(grindClose) => {
    setGrindOpen(grindClose)
}
const getCoffee = (coffee) => {
    setCoffee(coffee)
}
const coffeeClose = (coffeeClose) => {
    setCoffeeOpen(coffeeClose)
}

  //setting ingredients side-slides
  const settingRoasting = () => {
    if (roastingOpen === '') {
        return (<div className='noneDisplay'></div>)
    }
    else if (roastingOpen === true) {
        return (
            <div className='roastingOpen'>
                <div className='roastingChoice'>
                    <Roasting getRoasting={getRoasting} roastingClose={roastingClose}/>
                </div>
            </div>
        )
    } else if (roastingOpen === false) {
        return (
            <div className='roastingClose'>
                <div className='roastingChoice'>
                    <Roasting getRoasting={getRoasting} roastingClose={roastingClose}/>
                </div>
            </div>
        )
    }
  }
  const settingCoffee = () => {
    if (coffeeOpen === true) {
        return (
            <div className='coffeeOpen'>
                <div className='coffeeChoice'>
                    <Coffee getCoffee={getCoffee} coffeeClose={coffeeClose}/>
                </div>
            </div>
        )
    } else if (coffeeOpen === false) {
        return (
            <div className='coffeeClose'>
                <div className='coffeeChoice'>
                    <Coffee getCoffee={getCoffee} coffeeClose={coffeeClose}/>
                </div>
            </div>
        )
    }
  }
  const settingGrind = () => {
    if (grindOpen === '') {
        return (<div className='noneDisplay'></div>)
    }
    else if (grindOpen === true) {
        return (
            <div className='grindOpen'>
                <div className='grindChoice'>
                    <Grind  getGrind={getGrind} grindClose={grindClose}/>
                </div>
            </div>
        )
    }else if (grindOpen === false) {
        return (
            <div className='grindClose'>
                <div className='grindChoice'>
                    <Grind  getGrind={getGrind} grindClose={grindClose}/>
                </div>
            </div>
        )
    }
  }
  const settingWater = () => {
    if (waterOpen === true) {
        return (
            <div className='waterOpen'>
                <div className='waterChoice'>
                    <Water getWater={getWater} waterClose={waterClose} coffee={coffee}/>
                </div>
            </div>
        )
    } else if (waterOpen === false) {
        return (
            <div className='waterClose'>
                <div className='waterChoice'>
                    <Water getWater={getWater} waterClose={waterClose} coffee={coffee}/>
                </div>
            </div>
        )
    }
  }

  //setting start brewing button
  const settingBrewBtn = () => {
    if (typeof water === 'string' &&
        typeof coffee === 'string' &&
        typeof roasting === 'string' &&
        typeof grind === 'string' ) {
            return (
                <div className='goBrewContainer'>
                    <button className='goBrewBtn'
                    onClick={() => navigate(`./brewing/${water}/${coffee}/${roasting}/${grind}/brewing`)}>
                        Start Brewing!
                    </button>
                </div>
            )
    } else {
        return (
            <div className='goBrewContainer'>
                <p>Pleas Fix all the recipes!</p>
            </div>
        )
    }
  }

  return (
    <div className='recipeContainer'>
        <span className='recipeBox'>
            <div className='left' style={{ justifyContent: coffeeOpen ? 'flex-end' : 'space-between'}}>
                {settingRoasting()}
                {settingCoffee()}
            </div>
            <div className='center'>
                <div className='header'>
                    <header>Brewing Recipe</header>
                </div>
                <div className='userMenu'>
                    <div className='userMenuName'>
                        <p>Your Coffee is</p>
                        <header>{menuName}</header>
                    </div>
                    <div className='userMenuImg'>
                        <svg width={"100%"} height={"100%"} viewBox='140 180 230 120' opacity={'0.8'}>
                            <UserMenu/>
                        </svg>
                    </div>
                </div>
                <div className='userMethod'>
                    <div className='userMethodImg'>
                        <svg width={"100%"} height={"100%"} viewBox='140 190 230 120'>
                            <UserMethod/>
                        </svg>
                    </div>
                    <div className='userMethodName'>
                        <p>Your Method is</p>
                        <header>{methodName}</header>
                    </div>
                </div>
                <h3>Click and choose recipes for your Coffee</h3>
                <div className='options'>
                    <div className='firstRow'>
                        <div className='roasting' onClick={() => {setRoastingOpen(true)}}>
                            <p style={{textTransform:'uppercase'}}>{roasting}</p>
                            <p>Roasting</p>
                        </div>
                        <div className='grind' onClick={() => {setGrindOpen(true)}}>
                        <p style={{textTransform:'uppercase'}}>{grind}</p>
                            <p>Grind Size</p>
                        </div>
                    </div>
                    <div className='secondRow'>
                        <div className='coffee' onClick={() => {setCoffeeOpen(true)}}>
                            <p>{coffee}</p>
                            <p>Coffee</p>
                        </div>
                        <div className='water' onClick={() => {setWaterOpen(true)}}>
                            <p>{water}</p>
                            <p>Water</p>
                        </div>  
                    </div>
                </div>
                {settingBrewBtn()}
            </div>
            <div className='right' style={{ justifyContent: waterOpen ? 'flex-end' : 'space-between'}}>
                {settingGrind()}
                {settingWater()}
            </div>
        </span>
    </div>
  )
}
