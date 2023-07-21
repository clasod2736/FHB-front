import React, { useState} from 'react'
import './Menu.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

//images and icons
import {ReactComponent as MilkFoam } from '../../assets/milkFoam.svg'
import { BiSolidCoffeeBean } from 'react-icons/bi'

export default function Menu() {

    const [menuName, setMenuName] = useState('off');

    const { userName } = useParams();
    const navigate = useNavigate();

    const handleMenu = (menu) => {
        setMenuName(menu)
        console.log(menu)
    }
    const handleMenuClose = () => {
        setMenuName('');
    };
    const handleMenuContents = () => {
        if (menuName === 'off') {
            return 'menuContentsOff'
        } else if (menuName === '') {
            return 'menuContentsClose'
        } else if (
            menuName === 'espresso' || 
            menuName === 'americano' || 
            menuName ==='longBlack' || 
            menuName === 'coldBrew' || 
            menuName === 'latte' || 
            menuName === 'flatWhite' || 
            menuName === 'cappuccino' || 
            menuName === 'mocha' || 
            menuName === 'macchiato' || 
            menuName === 'chai' || 
            menuName === 'tumeric' || 
            menuName === 'icedCoffee' || 
            menuName === 'affogato'
        ) {
            console.log(menuName)
            return 'menuContents'
            }
        }

  return (
    <div className='menuContainer'>
        <div className='menu'>
            <div className='menuTitle'>
                Choose Today's Coffee.
            </div>
            <span className='eachMenu'>
                <div className='eachMenuContainer'>
                    <div className='blackCategory'>
                        <div className='espresso' onClick={() => {handleMenu('espresso')}}>
                            <div className='espressoImg'></div>
                            <p>Espresso</p>
                        </div>
                        <div className='americano' onClick={() => {handleMenu('americano')}}>
                            <div className='americanoImg'></div>
                            <p>Americano</p>
                        </div>
                        <div className='longBlack' onClick={() => {handleMenu('longBlack')}}>
                            <div className='longBlackImg'></div>
                            <p>Long Black</p>
                        </div>
                        <div className='coldBrew' onClick={() => {handleMenu('coldBrew')}}>
                            <div className='coldBrewImg'></div>
                            <p>Cold Brew</p>
                        </div>
                    </div>
                    <div className='whiteCategory'>
                        <div className='latte' onClick={() => {handleMenu('latte')}}>
                            <div className='latteImg'></div>
                            <p>Latte</p>
                        </div>
                        <div className='flatWhite' onClick={() => {handleMenu('flatWhite')}}>
                            <div className='flatWhiteImg'></div>
                            <p>Flat White</p>
                        </div>
                        <div className='cappuccino' onClick={() => {handleMenu('cappuccino')}}>
                            <div className='cappuccinoImg'></div>
                            <p>Capuccino</p>
                        </div>
                        <div className='mocha' onClick={() => {handleMenu('mocha')}}>
                            <div className='mochaImg'></div>
                            <p>Mocha</p>
                        </div>
                        <div className='macchiato' onClick={() => {handleMenu('macchiato')}}>
                            <div className='macchiatoImg'></div>
                            <p>Macchiato</p>
                        </div>
                    </div>
                    <div className='othersCategory'>
                        <div className='chai' onClick={() => {handleMenu('chai')}}>
                            <div className='chaiImg'></div>
                            <p>Chai Latte</p>
                        </div>
                        <div className='tumeric' onClick={() => {handleMenu('tumeric')}}>
                            <div className='tumericImg'></div>
                            <p>Tumeric Latte</p>
                        </div>
                        <div className='icedCoffee' onClick={() => {handleMenu('icedCoffee')}}>
                            <div className='icedCoffeeImg'></div>
                            <p>Iced Coffee</p>
                        </div>
                        <div className='affogato' onClick={() => {handleMenu('affogato')}}>
                            <div className='affogatoImg'></div>
                            <p>Affogato</p>
                        </div>
                    </div>
                </div>
                <div className={handleMenuContents()}>
                    <span className='title'>
                        <span className='titleandBtn'>
                            <button onClick={() => {setMenuName(''); handleMenuClose()}}>🅧</button>
                            <header>White Coffee</header>
                        </span>
                        <div className='titleText'>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <p>printing and typesetting industry.</p>
                            <p> text of the printing</p>
                        </div>
                    </span>
                    <div className='coffeeTitle'>
                        <header>Flat White</header>
                        <div className='ingredients'>
                            <h3>Ingredients</h3>
                            <span>
                                <div className='milkFoam'>
                                    <svg width={'40px'} height={'40px'} viewBox='130 200 220 100'>
                                        <MilkFoam/>
                                    </svg>
                                    <p>Milk Foam</p>
                                </div>
                                <div className='Espresso'>
                                    <BiSolidCoffeeBean className='beanIcon'/>
                                    <p>Espresso</p>
                                </div>
                            </span>
                        </div>
                        <div className='coffeeText'>
                            <p>men who are so beguiled and demoralized</p>
                            <p>hich is the same as saying through shrinking </p>
                            <p>leasures have to be repudiate</p>
                        </div>
                    </div>
                    <span className='getMenuBtn'>
                        <button onClick={async () => {
                            const serverUrl = 'http://localhost:8080/menu'
                            
                            try {
                                const response = await axios.put(serverUrl, {
                                        name : userName,
                                        currentBrews : {
                                            menuName : menuName
                                        } 
                                })
                                console.log(response.data.currentBrews)
                                
                                navigate(`./${menuName}/method`);
                            } catch (error) {
                                console.log(error)
                            }

                            }}>Choose this Coffee</button>
                    </span>
                </div>
            </span>
        </div>
    </div>
  )
}
