import React, { useState, useEffect} from 'react'
import './Menu.css'
import { useNavigate} from 'react-router-dom'

//Icons
import { MilkFoam } from '../../assets'

import { BiSolidCoffeeBean } from 'react-icons/bi'
import { IoIosWater } from 'react-icons/io'
import { GiMilkCarton,GiChocolateBar, GiThreeLeaves, GiPowder } from 'react-icons/gi'
import { LiaIceCreamSolid } from 'react-icons/lia'


export default function Menu() {

    const [menuName, setMenuName] = useState('off');
    const [sideMenu, setSideMenu] = useState('off')

    const navigate = useNavigate();

    //handling Side-Menu
    
    const handleMenuContents = () => {
        if (sideMenu === 'off') {
            return 'menuContentsOff'
        } else if (sideMenu === 'close') {
            return 'menuContentsClose'
        } else if (sideMenu ==='open') {
            return 'menuContents'
            }
    }

    //re-render sideMenu when coffee choices are changed
    useEffect(() => {
        const handleSide = () => {
            if (menuName === "off") {
                setSideMenu('off')
            }
            else if (menuName === '') {
                setSideMenu('close')
            }
            else if (
                menuName === 'espresso' || 
                menuName === 'americano' || 
                menuName === 'longBlack' || 
                menuName === 'coldBrew' || 
                menuName === 'latte' || 
                menuName === 'flatWhite' || 
                menuName === 'cappuccino' || 
                menuName === 'mocha' || 
                menuName === 'macchiato' || 
                menuName === 'chai' || 
                menuName === 'turmeric' || 
                menuName === 'icedCoffee' ||    
                menuName === 'affogato'
            ) {
                    setSideMenu("open")
            }
        }
        handleSide();
    }, [ menuName ])


    // rendering Mock information of Coffee menu in Sidemenu
    const settingDescription = () => {

        if (menuName === "espresso") {
            return (
                <div className='titleText'>
                    <p>Bold Italian coffee, rich & concentrated.</p>
                    <p>Made by forcing hot water</p>
                    <p>Through finely-ground beans.</p>
                </div>
            )
        }
        else if (menuName === "americano") {
            return (
                <div className='titleText'>
                    <p>Americano. A milder coffee drink</p>
                    <p>Made by espresso with hot water,</p>
                    <p>Resulting in a lighter flavor.</p>
                </div>
            )
        }
        else if (menuName === "longBlack") {
            return (
                <div className='titleText'>
                    <p>Long black. coffee where hot water</p> 
                    <p>is poured over double shots,</p>
                    <p>offering a bold flavor with crema preservation.</p>
                </div>
            )
        }
        else if (menuName === "coldBrew") {
            return (
                <div className='titleText'>
                    <p>Cold brew.</p>
                    <p>Coffee brewed with cold water</p>
                    <p>over an extended period.</p>
                </div>
            )
        }
        else if (menuName === "latte") {
            return (
                <div className='titleText'>
                    <p>Espresso combined with milk</p>
                    <p>resulting in a creamy</p>
                    <p>balanced coffee drink.</p>
                </div>
            )
        }
        else if (menuName === "flatWhite") {
            return (
                <div className='titleText'>
                    <p>Creamy blend of espresso</p>
                    <p>It start from Australia.</p>
                    <p>Rich and Strong flavour profile.</p>
                </div>
            )
        }
        else if (menuName === "cappuccino") {
            return (
                <div className='titleText'>
                    <p>A classic combo</p>
                    <p>espresso, steamed milk, foam</p>
                    <p>in Cappuccino delight.</p>
                </div>
            )
        }
        else if (menuName === "mocha") {
            return (
                <div className='titleText'>
                    <p>Mocha.</p>
                    <p>espresso meets rich chocolate</p>
                    <p>For a divine treat.</p>
                </div>
            )
        }
        else if (menuName === "macchiato") {
            return (
                <div className='titleText'>
                    <p>Bold espresso with a milk stain</p>
                    <p>the distinct Macchiato.</p>
                </div>
            )
        }
        else if (menuName === "chai") {
            return (
                <div className='titleText'>
                    <p>Warm spices and tea unite</p>
                    <p>In the aromatic Chai Latte.</p>
                </div>
            )
        }
        else if (menuName === "turmeric") {
            return (
                <div className='titleText'>
                    <p>Turmeric Latte.</p>
                    <p>a blend of turmeric, milk, and spice.</p>
                </div>
            )
        }
        else if (menuName === "icedCoffee") {
            return (
                <div className='titleText'>
                    <p>Iced Coffee.</p>
                    <p>A sweety blend of</p>
                    <p>Espresso, milk, and ice cream.</p>
                </div>
            )
        }
        else if (menuName === "affogato") {
            return (
                <div className='titleText'>
                    <p>Affogato.</p>
                    <p>Espresso meets ice cream</p>
                    <p>For a divine pairing</p>
                </div>
            )
        }
    }
    const settingIngredients = () => {

        if (menuName === "espresso") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                </span>
            )
        } else if (menuName === "americano") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='water'>
                        <IoIosWater className='waterIcon'/>
                        <p>Water</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "longBlack") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='water'>
                        <IoIosWater className='waterIcon'/>
                        <p>Water</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "coldBrew") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='water'>
                        <IoIosWater className='waterIcon'/>
                        <p>Water</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "latte") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milk'>
                        <GiMilkCarton className='milkIcon'/>
                        <p>Milk</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "flatWhite") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milkFoam'>
                        <div className='milkFoamIcon'>
                            <svg width={'100%'} height={'100%'} viewBox='50 180 400 120'>
                                <MilkFoam/>
                            </svg>
                        </div>
                        <p>Milkfoam</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "cappuccino") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milkFoam'>
                        <div className='milkFoamIcon'>
                            <svg width={'100%'} height={'100%'} viewBox='50 180 400 120'>
                                <MilkFoam/>
                            </svg>
                        </div>
                        <p>Milkfoam</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "mocha") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milk'>
                        <GiMilkCarton className='milkIcon'/>
                        <p>Milk</p>
                    </div>
                    <div className='choco'>
                        <GiChocolateBar className='chocoIcon'/>
                        <p>Choco    </p>
                    </div>
                </span>
            )
        }
        else if (menuName === "macchiato") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milkFoam'>
                        <div className='milkFoamIcon'>
                            <svg width={'100%'} height={'100%'} viewBox='50 180 400 120'>
                                <MilkFoam/>
                            </svg>
                        </div>
                        <p>Milkfoam</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "chai") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milk'>
                        <GiMilkCarton className='milkIcon'/>
                        <p>Milk</p>
                    </div>
                    <div className='chai'>
                        <GiThreeLeaves className='chaiIcon'/>
                        <p>Chai</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "turmeric") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milk'>
                        <GiMilkCarton className='milkIcon'/>
                        <p>Milk</p>
                    </div>
                    <div className='turmericIng'>
                        <GiPowder className='turmericIcon'/>
                        <p>Turmeric</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "icedCoffee") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='milk'>
                        <GiMilkCarton className='milkIcon'/>
                        <p>Milk</p>
                    </div>
                    <div className='iceCream'>
                        <LiaIceCreamSolid className='iceCreamIcon'/>
                        <p>Icecream</p>
                    </div>
                </span>
            )
        }
        else if (menuName === "affogato") {
            return (
                <span>
                    <div className='espresso'>
                        <BiSolidCoffeeBean className='beanIcon'/>
                        <p>Espresso</p>
                    </div>
                    <div className='iceCream'>
                        <LiaIceCreamSolid className='iceCreamIcon'/>
                        <p>Icecream</p>
                    </div>
                </span>
            )
        }
    }
    const settingSpecialty = () => {

        if (menuName === 'espresso') {
            return (
                <div className='coffeeText'>
                    <p>Crafting a perfect espresso</p>
                    <p>involves precise water-to-coffee ratio,</p>
                    <p>essential for balanced flavor extraction.</p>
                </div>
            )
        }
        else if (menuName === "americano") {
            return (
                <div className='coffeeText'>
                    <p>Americano.</p>
                    <p>creating a lighter flavor compared to a long black.</p>
                    <p>Water is added first, an Americano maintains the espresso's aroma and crema.</p>
                </div>
            )
        }
        else if (menuName === "longBlack") {
            return (
                <div className='coffeeText'>
                    <p>Pouring hot water over espresso shots,</p> 
                    <p>Unlike an Americano,</p>
                    <p>Water is added after the espresso,</p>
                    <p>preserving aroma and strength.</p>
                </div>
            )
        }
        else if (menuName === "coldBrew") {
            return (
                <div className='coffeeText'>
                    <p>Brewed in cold water over hours</p>
                    <p>less acidic taste with subtle sweetness.</p>
                    <p>it's known for its bold yet mellow flavor profile.</p>
                </div>
            )
        }
        else if (menuName === "latte") {
            return (
                <div className='coffeeText'>
                    <p>A classic coffee choice</p>
                    <p>crafted by blending espresso with</p>
                    <p>steamed milk for a creamy texture.</p>
                    <p>Its balanced flavor profile</p>
                </div>
            )
        }
        else if (menuName === "flatWhite") {
            return (
                <div className='coffeeText'>
                    <p>The Flat White melds rich espresso and velvety microfoam</p>
                    <p>resulting in a balanced</p>
                    <p>smooth coffee with a bold kick.</p>
                </div>
            )
        }
        else if (menuName === "cappuccino") {
            return (
                <div className='coffeeText'>
                    <p>Layers of espresso, steamed milk, and foam</p>
                    <p>harmonize in a Cappuccino</p>
                    <p>delivering a flavor with a creamy texture.</p>
                </div>
            )
        }
        else if (menuName === "mocha") {
            return (
                <div className='coffeeText'>
                    <p>Indulge in the Mocha's blend of espresso and cocoa</p>
                    <p>Creating a luxurious taste profile</p>
                    <p>Combines the best of coffee and chocolate.</p>
                </div>
            )
        }
        else if (menuName === "macchiato") {
            return (
                <div className='coffeeText'>
                    <p>With a touch of milk</p>
                    <p>Macchiato offers a strong</p>
                    <p>espresso taste balanced</p>
                    <p>making it a true espresso lover's choice.</p>
                </div>
            )
        }
        else if (menuName === "chai") {
            return (
                <div className='coffeeText'>
                    <p>Experience the Turmeric Latte's vibrant</p>
                    <p>turmeric, milk, and spices</p>
                    <p>come together to offer a cozy, earthy taste.</p>
                </div>
            )
        }
        else if (menuName === "turmeric") {
            return (
                <div className='coffeeText'>
                    <p>Experience the Turmeric Latte's vibrant</p>
                    <p>turmeric, milk, and spices</p>
                    <p>come together to offer a cozy, earthy taste.</p>
                </div>
            )
        }
        else if (menuName === "icedCoffee") {
            return (
                <div className='coffeeText'>
                    <p>Iced Coffee, popular in Australia</p>
                    <p>Espresso, milk, and a scoop of vanilla ice cream over ice</p> 
                    <p>offering a creamy and invigorating coffee experience.</p>
                </div>
            )
        }
        else if (menuName === "affogato") {
            return (
                <div className='coffeeText'>
                    <p>Affogato's simple elegance shines</p>
                    <p>as espresso meets creamy ice cream</p>
                    <p>creating a harmonious blend of hot and cold</p>
                </div>
            )
        }
    }

  return (
    <div className='menuContainer'>
        <div className='menu'>
            <div className='menuTitle'>
                Choose Today's Brewing.
            </div>
            <span className='chociesContainer'>
                <div className='choices'>
                    <div className='blackCategory'>
                        <div className='blackCoffee' onClick={() => {setMenuName('espresso')}}>
                            <img src="/img/coffee/espresso.jpg" alt="img"/>
                            <p>Espresso</p>
                        </div>
                        <div className='blackCoffee' onClick={() => {setMenuName('americano')}}>
                            <img src="/img/coffee/americano.jpg" alt="img"/>
                            <p>Americano</p>
                        </div>
                        <div className='blackCoffee' onClick={() => {setMenuName('longBlack')}}>
                            <img src="/img/coffee/longBlack.jpg" alt="img" className='longBlackImg'/>
                            <p>Long Black</p>
                        </div>
                        <div className='blackCoffee' onClick={() => {setMenuName('coldBrew')}}>
                            <img src="/img/coffee/coldBrew.jpg" alt="img"/>
                            <p>Cold Brew</p>
                        </div>
                    </div>
                    <div className='whiteCategory'>
                        <div className='whiteCoffee' onClick={() => {setMenuName('latte')}}>
                            <img src="/img/coffee/latte.jpg" alt="img"/>
                            <p>Latte</p>
                        </div>
                        <div className='whiteCoffee' onClick={() => {setMenuName('flatWhite')}}>
                            <img src="/img/coffee/flatWhite.jpg" alt="img" className='flatWhiteImg'/>
                            <p>Flat White</p>
                        </div>
                        <div className='whiteCoffee' onClick={() => {setMenuName('cappuccino')}}>
                            <img src="/img/coffee/cappuccino.jpg" alt="img" className='cappuccinoImg'/>
                            <p>Capuccino</p>
                        </div>
                        <div className='whiteCoffee' onClick={() => {setMenuName('mocha')}}>
                            <img src="/img/coffee/mocha.jpg" alt="img" className='mochaImg'/>
                            <p>Mocha</p>
                        </div>
                        <div className='whiteCoffee' onClick={() => {setMenuName('macchiato')}}>
                            <img src="/img/coffee/macchiato.jpg" alt="img" className='macchiatoImg'/>
                            <p>Macchiato</p>
                        </div>
                    </div>
                    <div className='othersCategory'>
                        <div className='otherCoffee' onClick={() => {setMenuName('chai')}}>
                            <img src="/img/coffee/chai.jpg" alt="img"/>
                            <p>Chai</p>
                        </div>
                        <div className='otherCoffee' onClick={() => {setMenuName('turmeric')}}>
                            <img src="/img/coffee/turmeric.jpg" alt="img"/>
                            <p>Turmeric</p>
                        </div>
                        <div className='otherCoffee' onClick={() => {setMenuName('icedCoffee')}}>
                            <img src="/img/coffee/icedCoffee.jpg" alt="img" className='icedCoffeeImg'/>
                            <p>Iced Coffee</p>
                        </div>
                        <div className='otherCoffee' onClick={() => {setMenuName('affogato')}}>
                            <img src="/img/coffee/affogato.jpg" alt="img"/>
                            <p>Affogato</p>
                        </div>
                    </div>
                </div>
                <div className={handleMenuContents()}>
                    <span className='title'>
                        <span className='titleandBtn'>
                            <button onClick={() => {
                                setSideMenu('close');
                                setMenuName('')
                                }}>🅧</button>
                            <header>{menuName}</header>
                        </span>
                        {settingDescription()}
                    </span>
                    <div className='ingredients'>
                        <div className='ingredientsTitle'>
                            <h3>Ingredients</h3>
                            <p>and breif specialty</p>
                        </div>
                        {settingIngredients()}
                    </div>
                    {settingSpecialty()}
                    <span className='getMenuBtn'>
                        <button onClick={() => {navigate(`./${menuName}/method`)}}>Choose this Coffee</button>
                    </span>
                </div>
            </span>
        </div>
    </div>
  )
}
