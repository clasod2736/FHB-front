import React, { useEffect, useState } from 'react'
import './MyRecipe.css'

import { useParams } from 'react-router-dom'
import axios from 'axios';

import {FaStar} from 'react-icons/fa'

export default function MyRecipe() {
    const [oldBrews, setOldBrews] = useState([])
    const [favourites, setFavourites] = useState([])
    const [fvMenu, setFvMenu] = useState('');
    const [fvMethod, setFvMethod] = useState('');
    const [changeHistory, setChangeHistory] = useState(false)

    const { userName } = useParams();


    //fetch history of oldBrews from database with useEffect
    useEffect(() => {
        async function fetchDatas() {
            const serverUrl = 'http://localhost:8080/getAllRecipes'

            try {
                const response = await axios.get(serverUrl, {
                    params: {
                        name: userName
                    }
                })
                console.log(response.data)
                setOldBrews(response.data.oldBrews)
                setFavourites(response.data.favourites)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchDatas();
    }, [userName])
    


    //set most favourite coffee and method with useEffect
    useEffect(() => {
        getFavouriteName();
    }, [oldBrews])



    // make history lists use with "Map" method with fetched data.
    const settingOldBrews = () => {
        if (oldBrews.length > 0 ) {

            const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
            const recentBrews = sortedBrews.slice(0, 5);
            const lastBrews = oldBrews.slice(6, 10);

            if (changeHistory === false) {

                return (
                    <ul className='history'>
                        {recentBrews.map((brew, index) => (
                                
                                <li key={index}>    
                                    <p className='date'>{brew.date}</p>
                                    <p className='menu'>{brew.menuName}</p>
                                    <p className='method'>{brew.methodName}</p>
                                    <p className='coffee'>{brew.coffee}g</p>
                                    <p className='serve'>{brew.serve}ml</p>
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
                                    <p className='serve'>{brew.serve}ml</p>
                                    <p className='roasting'>{brew.roasting}</p>
                                    <p className='grind'>{brew.grind}</p>
                                </li>
                            
                            ))}
                    </ul>
                )
            }

        }
    }

    //set favourite lists
    const settingFavourites = () => {
        const sortedFavs = oldBrews.sort((a, b) => b.order - a.order);

        if (favourites.length > 0) {
            
            return (
                <ul className='history'>
                    {sortedFavs.map((brew, index) => (
                            <li key={index}>
                                <p className='date'>{brew.date}</p>
                                <p className='menu'>{brew.menuName}</p>
                                <p className='method'>{brew.methodName}</p>
                                <p className='coffee'>{brew.coffee}g</p>
                                <p className='serve'>{brew.serve}ml</p>
                                <p className='roasting'>{brew.roasting}</p>
                                <p className='grind'>{brew.grind}</p>
                            </li>
                        ))}
                </ul>
            )
        }
    }


    // pick most choosed Coffee and Method with "Reduce" and "Math" javascript method.
    const getFavouriteName = () => {
        //get frequency of coffee name from all objects in DB
        const frequencyMenu = oldBrews.reduce((frequency, brew) => {
            const menuName = brew.menuName;

            frequency[menuName] = (frequency[menuName] || 0 ) + 1;
            return frequency
        }, {})
        console.log(frequencyMenu)

        //get frequency of method name from all objects in DB
        const frequencyMethod = oldBrews.reduce((frequency, brew) => {
            const methodName = brew.methodName;

            frequency[methodName] = (frequency[methodName] || 0 ) + 1;
            return frequency
        }, {})
        console.log(frequencyMethod)

        //get coffee name have highest number of frequency
        const maxMenuFrequency = Math.max(...Object.values(frequencyMenu));
        
        const mostFrequentMenuName = Object.keys(frequencyMenu).find(
            menuName => frequencyMenu[menuName] === maxMenuFrequency
            );
            
            console.log("Most frequent menu name:", mostFrequentMenuName);
            setFvMenu(mostFrequentMenuName)
            
        //get method name have highest number of frequency
        const maxMethodFrequency = Math.max(...Object.values(frequencyMethod));

        const mostFrequentMethodName = Object.keys(frequencyMethod).find(
            menuName => frequencyMethod[menuName] === maxMethodFrequency
          );
          
          console.log("Most frequent menu name:", mostFrequentMethodName);
          setFvMethod(mostFrequentMethodName)
    }
    const settingFvMenu = () => {
        if (fvMenu === 'cappuccino') {
            return (
                <div className='cappuccino'>
                    <p>Cappuccino</p>
                </div>
            )
        } else return 'none'
    }
    const settingFvMethod = () => {
        if (fvMethod === 'mokapot') {
            return (
                <div className='mokapot'>
                    <p>Moka Pot</p>
                </div>
            )
        }
    }

  return (
    <div className='myRecipeContainer'>
        <div className='myRecipe'>
            <div className='myRecipeContents'>
                <div className='myRecipTitle'>
                    <header>Check your History of Brewing.</header>
                    <p>FHB save maximum your 10 recent Brews. "Click" brew that you like to try Again!</p>
                </div>
                <div className='oldBrews'>
                    <div className='category'>
                        <p className='date'>Most Recent</p>
                        <p className='menu'>Menu</p>
                        <p className='method'>Method</p>
                        <p className='coffee'>Coffee</p>
                        <p className='serve'>Water</p>
                        <p className='roasting'>Roasting</p>
                        <p className='grind'>Grind</p>
                    </div>
                    {settingOldBrews()}
                    <div className='moreBtn'>
                        <button onClick={() => {setChangeHistory((prevChangeHistory) => !prevChangeHistory); console.log(changeHistory)}}>
                            { changeHistory ? "Check first 5 Brews" : "Check rest of the Brews" }
                            </button>
                    </div>
                </div>
                <div className='favouritesContainer'>
                    <div className='favTitle'>
                        <header><FaStar className='favIcon'/>Your favourite brews.</header>
                        <p>You can save maximum 5 favourite Brews.</p>
                    </div>
                    <div className='favourites'>
                        {/* <div className='favouriteMenu'>
                            {settingFvMenu()}
                        </div>
                        <p className='words'>with</p>
                        <div className='favouriteMethod'>
                            {settingFvMethod()}
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='myRecipeImg'></div>
        </div>
    </div>
  )
}
