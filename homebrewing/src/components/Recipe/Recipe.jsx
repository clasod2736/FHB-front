import React, { useState } from 'react'
import './Recipe.css'
import { useNavigate, useParams } from 'react-router-dom'

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
    const [userMenu, setUserMenu] = useState(false);
    const [userMethod, setUserMethod] = useState(false);
    const [roastingOpen, setRoastingOpen] = useState('');
    const [grindOpen, setGrindOpen] = useState('');
    const [waterOpen, setWaterOpen] = useState('');
    const [coffeeOpen, setCoffeeOpen] = useState('');


  //setting information what user chose
  const settingUserMenu = () => {
    if (userMenu === false) {
        return (
            <div className='userMenuClose'>
                <button onClick={() => {setUserMenu(true)}}>Coffee</button>
            </div>
        )
    } else if (userMenu === true) {
        return (
            <div className='userMenu'>
                <div className='userMenuName'>
                    <header>{menuName}</header>
                </div>
                <div className='userMenuImg'>
                    <svg width={"100%"} height={"100%"} viewBox='140 180 230 120' opacity={'0.8'}>
                        <UserMenu/>
                    </svg>
                </div>
            </div>
        )
    }
  }
  const settingUserMethod = () => {
    if (userMethod === false) {
        return (
            <div className='userMethodClose'>
                <button onClick={() => {setUserMethod(true)}}>Method</button>
            </div>
        )
    } else if (userMethod === true) {
        return (
            <div className='userMethod'>
                <div className='userMethodImg'>
                    <svg width={"100%"} height={"100%"} viewBox='140 190 230 120'>
                        <UserMethod/>
                    </svg>
                </div>
                <div className='userMethodName'>
                    <header>{methodName}</header>
                </div>
            </div>
        )
    }
  }
  const settingMidText = () => {
    if (userMenu === false || userMethod === false) {
        return (
            <p>Check Coffee and Method First!</p>
        )
    } else if (userMenu === true && userMethod === true) {
        return (
            <p>Then you choose 4 Ingredients!</p>
        )
    }
  }

  //setting ingredients slides
  const settingRoasting = () => {
    if (roastingOpen === true) {
        return (
            <div className='roastingOpen'>
                <div className='roastingChoice'>
                    <p>Just push the "Active" button for moving to next.</p>
                    <button onClick={
                        
                        () => {
                            setRoasting('dark');
                            setRoastingOpen(false);
                        }
                        
                        }>active!</button>
                </div>
            </div>
        )
    } else if (roastingOpen === false) {
        return (
            <div className='roastingClose'>
                <div className='roastingChoice'>
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
                <p>Just push the "Active" button for moving to next.</p>
                    <button onClick={
                        
                        () => {
                            
                            setCoffee('25')
                            setCoffeeOpen(false);
                        }
                        
                        }>active!</button>
                </div>
            </div>
        )
    } else if (coffeeOpen === false) {
        return (
            <div className='coffeeClose'>
                <div className='coffeeChoice'>
                </div>
            </div>
        )
    }
  }
  const settingGrind = () => {
    if (grindOpen === true) {
        return (
            <div className='grindOpen'>
                <div className='grindChoice'>
                <p>Just push the "Active" button for moving to next.</p>
                    <button onClick={
                        () => {
                            
                            setGrind('coarse')
                            setGrindOpen(false);
                        }
                        }>active!</button>
                </div>
            </div>
        )
    }else if (grindOpen === false) {
        return (
            <div className='grindClose'>
                <div className='grindChoice'>
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
                <p>Just push the "Active" button for moving to next.</p>
                    <button onClick={
                        
                        () => {
                            
                            setWater('250')
                            setWaterOpen(false);
                        }
                            
                            }>active!</button>
                </div>
            </div>
        )
    } else if (waterOpen === false) {
        return (
            <div className='waterClose'>
                <div className='waterChoice'>
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
                    onClick={() => navigate(`./brewing/${water}/${coffee}/${roasting}/${grind}/step1`)}>
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
                {settingUserMenu()}
                {settingUserMethod()}
                {settingMidText()}
                <div className='options'>
                    <div className='firstRow'>
                        <div className='roasting' onClick={() => {setRoastingOpen(true)}}>
                            <p>Roasting</p>
                        </div>
                        <div className='grind' onClick={() => {setGrindOpen(true)}}>
                            <p>Grind Size</p>
                        </div>
                    </div>
                    <div className='secondRow'>
                        <div className='coffee' onClick={() => {setCoffeeOpen(true)}}>
                            <p>Coffee</p>
                        </div>
                        <div className='water' onClick={() => {setWaterOpen(true)}}>
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
