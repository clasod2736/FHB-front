import React, {useEffect, useState} from 'react'
import './Fav.css'

import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

export default function Fav() {
    const [favourites, setFavourites] = useState([])
    const [favList, setFavList] = useState(undefined);
    const [description, setDescription] = useState('');

    const {userName} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDatas() {
            const serverUrl = 'http://localhost:8080/getFavourites'

            try {
                const response = await axios.get(serverUrl, {
                    params: {
                        name: userName
                    }
                })
                setFavourites(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchDatas();
    }, [ description ])

//set favourite lists with fetched data
const settingFavourites = () => {

if (favourites.length > 0) {
    
    return (
        <ul className='favList'>
            {favourites.map((favourite, index) => (
                    <li key={index}>
                        <p className='name'>- {favourite.favName}</p>
                        <div className='btnContainer'>
                            <button onClick={() => {

                            navigate(`/${userName}/menu/${favList.menuName}/method/${favList.methodName}/recipe`)

                            }}>Go Brew</button>
                            <button className='detail'
                            onClick={() => {

                            setFavList(favourite);
                            setDescription(favourite.description)
                            console.log(favourite.description)

                            }}>Detail</button>
                            <button onClick={() => {

                            deleteFav(favourite.favName);

                            }}>Delete</button>
                        </div>
                    </li>
                ))}
        </ul>
    )
} else {
    return (
        <div className='noneFav'>
            <Link className='makeFavBtn' to={`/${userName}/menu`}>Make Your Brews!</Link>
        </div>
    )
}
}

const settingFavDetails = () => {
    
    if (typeof favList !== 'object') {
        return (
            <div className='favDetailsNot'>
                <p>Details of Favourite Brew.</p>
            </div>
        )
    } else {
        return (
            <div className='favDetails'>
                <header>Check details and Add description.</header>
                <div className='detailsContainer'>
                    <div className='details'>
                        <h3>Name: {favList.favName}</h3>
                        <p>Coffee: {favList.menuName}</p>
                        <p>Method: {favList.methodName}</p>
                        <p>Water: {favList.serve}ml</p>
                        <p>Ground Coffee: {favList.coffee}g</p>
                        <p>Roasting Level: {favList.roasting}</p>
                        <p>Grind Size: {favList.grind}</p>
                    </div>
                    <div className='description'>
                        <p>Description</p>
                        <textarea className='descriptionInput' cols={'6'} rows={'6'} maxLength={100} 
                        value={description}
                        onChange={(e) => {setDescription(e.target.value); console.log(description)}}
                        > <p>Hello!!</p>
                        </textarea>
                        <button type='submit' className='saveDescription' 
                        onClick={() => {saveDescription()}}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}


const saveDescription = async () => {

        try {

            const response = await axios.put('http://localhost:8080/updateDescription', {
                favourites : {
                    favName: favList.favName,
                    description: description
                }
            })
            console.log(response.data.favourites);
        } 
    catch (error) {
        console.log(error)
    }
}

//Delete Fav in web and database
const deleteFav = (favName) => {

    try {

        const response = axios.delete('http://localhost:8080/deleteFav', {
            params: {
                favName : favName
            }
        })
        console.log(response.data)
        setFavourites(prevFavourites => prevFavourites.filter(item => item.favName !== favName));
    }
    catch (error) {
        console.log(error)
    }
}


  return (
    <div className='FavContainer'>
        <div className='favTitle'>
            <header><FaStar className='favIcon'/>Your favourite brews.</header>
            <p>You can save maximum 5 favourite Brews.</p>
        </div>
        <div className='favContents'>
            <div className='favourites'>
                {settingFavourites()}
            </div>
            <div className='favOthers'>
                {settingFavDetails()}
            </div>
        </div>
    </div>
  )
}
