import React, { useState } from 'react'
import './Recipe.css'
import { useNavigate, useParams } from 'react-router-dom'

//Svg
import {ReactComponent as UserMenu} from '../../assets/userMenu.svg'
import {ReactComponent as UserMethod} from '../../assets/userMethod.svg'


export default function Recipe() {

    const navigate = useNavigate();
    const { menuName, methodName } = useParams();

    //States for saving Recipes
    // const [serve, setServe] = useState(1);
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


// useEffect(() => {
//     setWater(serve * 200);
//     setCoffee(serve * 25)
//   }, [serve, coffee]);

  //setting chosen coffee and method
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

  //setting ingredients
  const settingRoasting = () => {
    if (roastingOpen === true) {
        return (
            <div className='roastingOpen'>
                <div className='roastingChoice'>
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

  //setting button to start brewing
  const settingBrewBtn = () => {
    if (typeof water === 'string' &&
        typeof coffee === 'string' &&
        typeof roasting === 'string' &&
        typeof grind === 'string' ) {
            return (
                <div className='goBrewContainer'>
                    <button className='goBrewBtn'
                    onClick={() => navigate(`./brewing/${coffee}/${water}/${roasting}/${grind}/step1`)}>
                        Start Brewing!
                    </button>
                </div>
            )
    } else {
        return (
            <div className='goBrewContainer'>
                <p>Pleas Choose fix all the recipes!</p>
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
            {/* <div className='menuContents'>
                    <div className='coffeeChoice'>
                        <header>Flat White</header>
                        <Link to={`/${userName}/menu`}>
                            <button>Change Coffee?</button>
                        </Link>
                    </div>
                    <div className='methodChoice'>
                        <header>Moka Pot</header>
                        <Link to={`/${userName}/menu/${menuName}/method`}>
                            <button>Change Method?</button>
                        </Link>
                    </div>
                    <div className='ratioChoice'>
                        <div className='ratioOption'>
                            <div className='serve'>
                                <div className='serveText'>
                                    <div className='serveNum'>
                                        <p>NO. of Serve</p>
                                        <button onClick={()=>{setServe((prev => prev - 1));
                                                                if (serve === 1) {
                                                                    setServe(1);}}}>-</button>
                                        <p>{serve}</p>
                                        <button onClick={()=>{setServe((prevServe => prevServe + 1));
                                                                if (serve === 10) {
                                                                    setServe(10);}}}>+</button>
                                    </div>
                                </div>
                                <div className='serveBtn'>
                                    <p>{water}ml</p>
                                </div>
                            </div>
                            <div className='roasting'>
                                <p>Roasting Level</p>
                                <div className='roastingLevel'>
                                    <button className='light' onClick={()=>{setRoasting('light')}}
                                    style={{opacity: roasting === 'light' ? '1' : '0.3'}}>Light</button>
                                    <button className='medium' onClick={()=>{setRoasting('medium')}}
                                    style={{opacity: roasting === 'medium' ? '1' : '0.3'}}>Medium</button>
                                    <button className='dark' onClick={()=>{setRoasting('dark')}}
                                    style={{opacity: roasting === 'dark' ? '1' : '0.3'}}>Dark</button>
                                </div>
                            </div>
                            <div className='grind'>
                                <p>Grind Size</p>
                                <div className='grindSize'>
                                    <button className='fine' onClick={()=>{setGrind('fine')}}
                                    style={{opacity: grind === 'fine' ? '1' : '0.3'}}>Fine</button>
                                    <button className='medium' onClick={()=>{setGrind('medium')}}
                                    style={{opacity: grind === 'medium' ? '1' : '0.3'}}>Medium</button>
                                    <button className='coarse' onClick={()=>{setGrind('coarse')}}
                                    style={{opacity: grind === 'coarse' ? '1' : '0.3'}}>Coarse</button>
                                </div>
                            </div>
                            <div className='groundCoffee'>
                                <header>Ground Coffee</header>
                                <h3>20G</h3>
                                <p>per serve.</p>
                            </div>
                        </div>
                        <div className='prepList'>
                            <header>Stuff List</header>
                            <li>
                                <input type="checkbox" name='firstList'/>
                                    <label htmlFor="firstList">Moka Pot</label>
                            </li>
                            <li>
                                <input type="checkbox" name='secondList'/>
                                    <label htmlFor="secondList">Milk Foamer</label>
                            </li>
                            <li>
                                <input type="checkbox" name='thirdList'/>
                                    <label htmlFor="thirdList">Milk 100ml</label>
                            </li>
                            <li>
                                <input type="checkbox" name='fourthList'/>
                                    <label htmlFor="fourthList">{amount}g of coffee</label>
                            </li>
                            <li>
                                <input type="checkbox" name='fifthList'/>
                                    <label htmlFor="fifthList">{water}ml Water</label>
                            </li>
                            <li>
                                <input type="checkbox" name='sixthList'/>
                                    <label htmlFor="sixthList">Bean Grinder</label>
                            </li>
                        </div>
                    </div>
                    <div className='startBrewing'>
                        <p>did you check<br/> everything?<br/>
                        then...</p>
                        <button onClick={ async () => {
                            if (roasting === '' || grind === '') {
                                alert('Please Choose Roasting Level and Grind Size!')
                            } else {
                                const serverUrl = 'http://localhost:8080/recipe'

                                try {
                                    const response = await axios.put (serverUrl, {
                                        name : userName,
                                        currentBrews : {
                                            serve : water,
                                            coffee: amount,
                                            roasting: roasting,
                                            grind: grind
                                        }                                         
                                    })

                                    console.log(response.data.currentBrews)
                                } catch (error) {
                                    console.log(error)
                                }

                                navigate(`./brewing/${water}/${amount}/${roasting}/${grind}/step1`)
                            }}}>Start Brewing!</button>
                    </div>
            </div> */}
        </span>
    </div>
  )
}
