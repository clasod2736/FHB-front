import React, { useState, useEffect } from 'react'
import './Recipe.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Recipe() {

    const navigate = useNavigate();
    const { userName } = useParams();
    const { menuName } = useParams();

    const [serve, setServe] = useState(1);
    const [water, setWater] = useState(180);
    const [custom, setCustom] = useState('');
    const [roasting, setRoasting] = useState('');
    const [grind, setGrind] = useState('');
    const [amount, setAmount] = useState('?');

useEffect(() => {
    console.log(serve);
    setWater(serve * 180);
    setAmount(serve * 25)
  }, [serve, amount]);


  return (
    <div className='recipeContainer'>
        <span className='recipeBox'>
            <div className='recipeTag'>
                <div className='tag'>
                    <p>R</p>
                    <p>e</p>
                    <p>c</p>
                    <p>i</p>
                    <p>p</p>
                    <p>e</p>
                    <p>b</p>
                    <p>o</p>
                    <p>o</p>
                    <p>k</p>    
                </div>
            </div>
            <div className='menuContents'>
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
                                    <div className='serveInput'>
                                        <input type="text" placeholder='Custom amount' value={custom}
                                        onChange={(e) => {setCustom(e.target.value)}}/>
                                        <button onClick={() => {
                                            if (custom === '') {
                                                alert('Please put some numbers.')
                                            }
                                            else if (!isNaN(custom) && custom.length < 5) {
                                                setWater(custom);
                                                setCustom('');
                                            } 
                                            else if (isNaN(custom)) {
                                                alert('please put NUMBER only!')
                                                setCustom('')
                                            } else if (custom.length > 4) {
                                                alert('Please DONT put too much number')
                                                setCustom('')
                                            }
                                        }}>✔</button>
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
                                <h3>25G</h3>
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
                        <button onClick={() => {
                            if (roasting === '' || grind === '') {
                                alert('Please Choose Roasting Level and Grind Size!')
                            } else {
                                navigate(`./brewing/${water}/${roasting}/${grind}/step1`)
                            }}}>Start Brewing!</button>
                    </div>
            </div>
        </span>
    </div>
  )
}
