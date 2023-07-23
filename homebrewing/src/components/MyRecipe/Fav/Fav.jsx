import React, {useEffect, useState} from 'react'
import './Fav.css'

import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

export default function Fav() {
    const [favourites, setFavourites] = useState([])
    const [fav, setFav] = useState('');
    const [favDetail, setFavDetail] = useState(false);
    const [favChange, setFavChange] = useState(0)
    const [fvMenu, setFvMenu] = useState('');
    const [fvMethod, setFvMethod] = useState('');

    //States for custom FavDetails
    const [custom, setCustom] = useState('');
    const [menuName, setMenuName] = useState(false);

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
                console.log(response.data)
                setFavourites(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchDatas();
    }, [])

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

                            navigate(`/${userName}/menu/${favDetail.menuName}/method/${favDetail.methodName}/recipe`)

                            }}>Go Brew</button>
                            <button className='custom'
                            onClick={() => {

                            setFav(favourite.favName);
                            setFavDetail(favourite);

                            }}>Custom</button>
                            <button onClick={() => {

                            deleteFav();
                            setFavChange((prev) => prev + 1);

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
    
    if (!favDetail) {
        return (
            <div className='favDetailsNot'>
                <p>Details of Favourite Brew.</p>
            </div>
        )
    } else if (favDetail) {

        return (
            <div className='favDetails'>
                {settingCustomFavDetails()}
                <div className='details' style={{ display: custom === '' ? 'flex' : 'none'}}>
                    <header>Click and custom each recipe.</header>
                    <h3>Name: {favDetail.favName}</h3>
                    <p 
                    onClick={() => {setCustom('menuName');
                    }}>Coffee: {favDetail.menuName}</p>
                    <p 
                    >Method: {favDetail.methodName}</p>
                    <p 
                    >Water: {favDetail.serve}ml</p>
                    <p 
                    >Ground Coffee: {favDetail.coffee}g</p>
                    <p 
                    >Roasting Level: {favDetail.roasting}</p>
                    <p 
                    >Grind Size: {favDetail.grind}</p>
                </div>
            </div>
        )
    }

}

console.log(fav.menuName)

const settingCustomFavDetails = () => {
    if (custom === '') {
        return (
            <div style={{ display: 'none'}}></div>
        )
    }
    else if (custom === 'menuName') {
        return (
            <div className='custom'>
                <div className='menuName'>
                    <button onClick={ async () => {
                        setMenuName('espresso');

                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                    }}
                    style={{ display: favDetail.menuName === 'espresso'? 'none' : 'flex'}}
                    >Espresso</button>
                    <button onClick={ async () => {
                        setMenuName('americano');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: [{
                                    favName: fav,
                                    menuName : menuName
                                }]
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');

                        console.log(custom)
                        console.log(menuName)
                        }}
                        style={{ display: favDetail.menuName === 'americano' ? 'none' : 'flex'}}
                        >Americano</button>
                    <button onClick={ async () => {
                        setMenuName('longBlack');

                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'longBlack'? 'none' : 'flex'}}
                        >Long Black</button>
                    <button onClick={ async () => {
                        setMenuName('coldBrew');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'clodBrew'? 'none' : 'flex'}}
                        >Cold Brew</button>
                    <button onClick={ async () => {
                        setMenuName('latte');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'latte' ? 'none' : 'flex'}}
                        >Latte</button>
                    <button onClick={ async () => {
                        setMenuName('flatWhite');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'flatWhite'? 'none' : 'flex'}}
                        >Flat White</button>
                    <button onClick={ async () => {
                        setMenuName('cappuccino');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'cappuccino'? 'none' : 'flex'}}
                        >Cappuccino</button>
                    <button onClick={ async () => {
                        setMenuName('mocha');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'mocha'? 'none' : 'flex'}}
                        >Mocha</button>
                    <button onClick={ async () => {
                        setMenuName('macchiato');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'macchiato'? 'none' : 'flex'}}
                        >Macchiato</button>
                    <button onClick={ async () => {
                        setMenuName('chai');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'chai' ? 'none' : 'flex'}}
                        >Chai Latte</button>
                    <button onClick={ async () => {
                        setMenuName('tumeric');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'tumeric'? 'none' : 'flex'}}
                        >Tumeric</button>
                    <button onClick={ async () => {
                        setMenuName('icedCoffee');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'icedCoffee'? 'none' : 'flex'}}
                        >Iced Coffee</button>
                    <button onClick={ async () => {
                        setMenuName('affogato');
                        
                        try {
                            const response = await axios.put('http://localhost:8080/putMenuName', {
                                favourites: {
                                    favName: fav,
                                    menuName : menuName
                                }
                            })
                            console.log(response.data)
                        } catch (error) {
                            console.log(error)
                        }
                        setCustom('');
                        }}
                        style={{ display: favDetail.menuName === 'affogato'? 'none' : 'flex'}}
                        >Affogato</button>
                </div>
            </div>
        )
    }
}

//Delete Fav in database
const deleteFav = () => {

    try {

        const response = axios.delete('http://localhost:8080/deleteFav', {
            params: {
                favName : fav
            }
        })
        console.log(response.data)
        setFavourites(prevFavourites => prevFavourites.filter(item => item.favName !== fav));
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
                {/* <div className='favouriteMenu'>
                    {settingFvMenu()}
                </div>
                <p className='words'>with</p>
                <div className='favouriteMethod'>
                    {settingFvMethod()}
                </div> */}

        </div>
    </div>
  )
}
