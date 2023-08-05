import React, { useEffect, useState } from 'react'
import './MyRecipe.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

//component
import Fav from './Fav/Fav';

export default function MyRecipe() {
    const userEmail = useSelector((state) => state.userEmail);
    console.log("userEmail: ", userEmail)
    const [oldBrews, setOldBrews] = useState([]);
    const [changeHistory, setChangeHistory] = useState(false)

    const navigate = useNavigate();


    //fetch history of oldBrews from database
    useEffect(() => {
        async function fetchDatas() {
            const serverUrl = 'http://localhost:8080/getOldbrews'

            try {
                const response = await axios.get(serverUrl, {
                    params: {
                        email: userEmail
                    }
                })
                console.log(response.data)
                setOldBrews(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchDatas();
    }, [])
    console.log(oldBrews)

    // make history lists use with fetched data.
    const settingOldBrews = () => {
        if (oldBrews.length > 0 ) {

            const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
            const recentBrews = sortedBrews.slice(0, 5);
            const lastBrews = sortedBrews.slice(6, 10);

            if (changeHistory === false) {

                return (
                    <ul className='history'>
                        {recentBrews.map((brew, index) => (
                                
                                <li key={index}
                                onClick={() => {
                                    navigate(`/menu/${brew.menuName}/method/${brew.methodName}/recipe/brewing/${brew.water}/${brew.coffee}/${brew.roasting}/${brew.grind}/step1`)
                                }}>    
                                    <p className='date'>{brew.date}</p>
                                    <p className='menu'>{brew.menuName}</p>
                                    <p className='method'>{brew.methodName}</p>
                                    <p className='coffee'>{brew.coffee}g</p>
                                    <p className='water'>{brew.water}ml</p>
                                    <p className='roasting'>{brew.roasting}</p>
                                    <p className='grind'>{brew.grind}</p>
                                </li>
                            
                            ))}
                    </ul>
                )
            } else if (changeHistory === true) {

                return (
                    <ul className='history'>
                        {lastBrews.map((brew, index) => (
                                
                                <li key={index}>    
                                    <p className='date'>{brew.date}</p>
                                    <p className='menu'>{brew.menuName}</p>
                                    <p className='method'>{brew.methodName}</p>
                                    <p className='coffee'>{brew.coffee}g</p>
                                    <p className='water'>{brew.water}ml</p>
                                    <p className='roasting'>{brew.roasting}</p>
                                    <p className='grind'>{brew.grind}</p>
                                </li>
                            
                            ))}
                    </ul>
                )
            }
        }
    }

  return (
    <div className='myRecipeContainer'>
        <div className='myRecipe'>
            <div className='myRecipeContents'>
                <Fav/>
                <div className='myRecipTitle'>
                    <header>Check your History of Brewing.</header>
                    <p>FHB automatically save maximum your 10 recent Brews. "Click" brew that you like to try Again!</p>
                </div>
                <div className='oldBrews'>
                    <div className='category'>
                        <p className='date'>Most Recent</p>
                        <p className='menu'>Menu</p>
                        <p className='method'>Method</p>
                        <p className='coffee'>Coffee</p>
                        <p className='water'>Water</p>
                        <p className='roasting'>Roasting</p>
                        <p className='grind'>Grind</p>
                    </div>
                    {settingOldBrews()}
                    <div className='moreBtn'>
                        <button onClick={() => {setChangeHistory((prevChangeHistory) => !prevChangeHistory);}}>
                            { changeHistory ? "Check first 5 Brews" : "Check rest of the Brews" }
                            </button>
                    </div>
                </div>
            </div>
            <div className='myRecipeImg'></div>
        </div>
    </div>
  )
}
