import React, {useEffect, useState} from 'react'
import './Fav.css'

import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

// image and icon
import {ReactComponent as FHBLogo} from '../../../assets/favLogo.svg'
import {FaStar} from 'react-icons/fa'

export default function Fav() {
    const userEmail = useSelector((state) => state.userEmail);

    const [favourites, setFavourites] = useState([]);
    const [favList, setFavList] = useState(undefined);

    //States for setup custom details of Favourites
    const [customFav, setCustomFav] = useState('');
    const [customDetail, setCustomDetail] = useState('');
    const [fixedFav, setFixedFav] = useState([]);

    //States for updating custom details of Favourites
    const [favNameUpdate, setFavNameUpdate] = useState('');
    const [menuNameUpdate, setMenuNameUpdate] = useState('');
    const [methodNameUpdate, setMethodNameUpdate] = useState('');
    const [waterUpdate, setWaterUpdate] = useState('');
    const [coffeeUpdate, setCoffeeUpdate] = useState('');
    const [roastingUpdate, setRoastingUpdate] = useState('');
    const [grindUpdate, setGrindUpdate] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

//get favourites from DB
useEffect(() => {
    async function fetchDatas() {
        const serverUrl = 'http://localhost:8080/getFavourites'

        if (typeof userEmail === 'undefined') {
            console.log("Failed to get userEmail from Redux")
        } else {
              
            try {
                const response = await axios.get(serverUrl, {
                    params: {
                        email: userEmail
                    }
                })
                setFavourites(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    fetchDatas();
}, [ description, customFav, userEmail, fixedFav, favList ])


//setting favourite lists with fetched data
const settingFavourites = () => {

if (favourites.length > 0) {
    
    return (
        <ul className='favList'>
            {favourites.map((favourite, index) => (
                    <li key={index}>
                        <p>- {favourite.favName}</p>
                        <div className='btnContainer'>
                            <button onClick={() => {

                            navigate(`/menu/${favourite.menuName}/method/${favourite.methodName}/recipe/brewing/${favourite.water}/${favourite.coffee}/${favourite.roasting}/${favourite.grind}/step1`)

                            }}>Go Brew</button>
                            <button className='detail'
                            onClick={() => {

                            setFavList(favourite);
                            setDescription(favourite.description);
                            setCustomFav('')
                            setCustomDetail('')

                            }}>Custom</button>
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
                <Link className='makeFavBtn' to={'/menu'}>Make Your Favourite Brews!</Link>
            </div>
        )
    }
}

//setting details of favourites
const settingFavDetails = () => {
    
    if (typeof favList !== 'object') {
        return (
            <div className='favDetailsNot'>
                <svg width={'100%'} height={'70%'} viewBox='-20 180 550 120'>
                    <FHBLogo/>    
                </svg>
            </div>
        )
    } else if (customFav === '' || true){
        return (
            <div className='favDetails'>
                <header>Custom details and Add description.</header>
                <div className='detailsContainer'>
                    {settingFavDetailCustom()}
                    {settingCustom()}
                </div>
            </div>
        )
    }
}

const settingFavDetailCustom = () => {
    if (customFav === 'detail') {
        return ( 
            <div className='detailCustomSetting'>
                <p className='favName' onClick={() => {setCustomDetail('name')}}>Name: {favList.favName}</p>
                <p onClick={() => {setCustomDetail('menuName')}}>Coffee: {favList.menuName}</p>
                <p onClick={() => {setCustomDetail('methodName')}}>Method: {favList.methodName}</p>
                <p onClick={() => {setCustomDetail('water')}}>Water: {favList.water}ml</p>
                <p onClick={() => {setCustomDetail('coffee')}}>Ground Coffee: {favList.coffee}g</p>
                <p onClick={() => {setCustomDetail('roasting')}}>Roasting Level: {favList.roasting}</p>
                <p onClick={() => {setCustomDetail('grind')}}>Grind Size: {favList.grind}</p>
            </div>
        )
    } else if (customFav === '') {
        return (
            <div className='details'>
            <p className='favName'>Name: {favList.favName}</p>
            <p>Coffee: {favList.menuName}</p>
            <p>Method: {favList.methodName}</p>
            <p>Water: {favList.water}ml</p>
            <p>Ground Coffee: {favList.coffee}g</p>
            <p>Roasting Level: {favList.roasting}</p>
            <p>Grind Size: {favList.grind}</p>
        </div> 
        )
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

//setting custom options
const settingCustom = () => {
    if (customFav === '') {
        return (
            <div className='customContainer'>
                <div className='customOptions'>
                    <p>Custom</p>
                    <button onClick={() => {setCustomFav('detail')}}>Detail</button>
                    <button onClick={() => {setCustomFav('description')}}>Description</button>
                </div>
            </div>
        )
    } else if (customFav === 'detail') {
        return (
            <div className='customContainer'>
                    {settingCustomDetail()}
            </div>
        )
    } else if (customFav === 'description') {
        return (

            <div className='customContainer'>
                <div className='customDescription'>
                    <p>Description</p>
                    <textarea className='descriptionInput' cols={'6'} rows={'6'} maxLength={100} 
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                    > <p>Hello!!</p>
                    </textarea>
                    <div className='descriptionBtnContainer'>
                        <button onClick={() => {setCustomFav('')}}>Back</button>
                        <button type='submit'onClick={() => {updateFavDescription()}}>Save</button>
                    </div>
                </div>
            </div>

        )
    }
}

//setting custom each details
const settingCustomDetail = () => {
    if (customDetail === '') {
        return (
            <div className='customDetail'>
                <div className='customDetailBasic'>
                    <div className='customDetailBasicText'>
                        <p>Click Each recipes</p>
                        <p>and Custom!</p>
                    </div>
                    <button onClick={() => {setCustomFav('')}}>Back</button>
                </div>
            </div>
        )
    } else if (customDetail === 'name') {
        return (
            <div className='customDetail'>
                <div className='customfavName'>
                    <p>New name of Favourite</p>
                    <input type="text" onChange={(e) => {setFavNameUpdate(e.target.value)}}/>
                    <button onClick={() => {setCustomDetail('')}}>Back</button>
                    <button
                    onClick={() => {
                        updateFavName(favList, favNameUpdate);
                        setCustomDetail('')
                        console.log(favList, favNameUpdate)
                        }}>Save</button>
                </div>
            </div>
        )
    } else if (customDetail === 'menuName') {
        return (
            <div className='customDetail'>
                <ul className='customMenuName'>
                    <li onMouseEnter={() => {setMenuNameUpdate('espersso')}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                    }}>Espersso</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('americano');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Americano</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('longBlack');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Long Black</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('coldBrew');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Cold Brew</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('latte');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Latte</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('flatWhite');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Flat White</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('cappuccino');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Cappuccino</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('mocha');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Mocha</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('macchiato');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Macchiato</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('chai');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Chai Latte</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('turmeric');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Turmeric Latte</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('icedCoffee');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Iced Coffee</li>
                    <li onMouseEnter={() =>{setMenuNameUpdate('affogato');}}
                        onClick={() => {
                        updateFavMenu(favList, menuNameUpdate);
                        setCustomDetail('')
                        }}>Affogato</li>
                </ul>
                <button onClick={() => {setCustomDetail('')}}>Back</button>
            </div>
        )
    } else if (customDetail === 'methodName') {
        return (
            <div className='customDetail'>
                <ul className='customMethodName'>
                    <li onMouseEnter={() => {setMethodNameUpdate('hariov6')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>Hario V6</li>
                    <li onMouseEnter={() => {setMethodNameUpdate('mokapot')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>Moka Pot</li>
                    <li onMouseEnter={() => {setMethodNameUpdate('frenchPress')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>French Press</li>
                    <li onMouseEnter={() => {setMethodNameUpdate('aeropress')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>Aeropress</li>
                    <li onMouseEnter={() => {setMethodNameUpdate('chemax')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>Chemax</li>
                    <li onMouseEnter={() => {setMethodNameUpdate('syphon')}}
                        onClick={() => {
                        updateFavMethod(favList, methodNameUpdate);
                        setCustomDetail('')
                    }}>Syphon</li>
                </ul>
                <button onClick={() => {setCustomDetail('')}}>Back</button>
            </div>
        )
    } else if (customDetail === 'water') {
        return (
            <div className='customDetail'>
                <div className='customWater'>
                    <button onMouseEnter={() => {setWaterUpdate(7 * favList.coffee)}}
                        onClick={() => {
                        updateFavWater(favList, waterUpdate);
                        setCustomDetail('')
                    }}>Strong 7:1</button>
                    <button onMouseEnter={() => {setWaterUpdate(10 * favList.coffee)}}
                        onClick={() => {
                        updateFavWater(favList, waterUpdate);
                        setCustomDetail('')
                    }}>Medium 10:1</button>
                    <button onMouseEnter={() => {setWaterUpdate(12.5 * favList.coffee)}}
                        onClick={() => {
                        updateFavWater(favList, waterUpdate);
                        setCustomDetail('')
                    }}>Mild 12.5:1</button>
                </div>
                <button className='backBtn' onClick={() => {setCustomDetail('')}}>Back</button>
            </div>
        )
    } else if (customDetail === 'coffee') {
        return (
            <div className='customDetail'>
                <div className='customCoffee'>
                    <div>
                        <p>Serve (max 10)</p>
                        <input type="text"
                        onChange={(e) => {setCoffeeUpdate(e.target.value)}}/>
                    </div>
                    <button onClick={() => {
                        if (coffeeUpdate === isNaN) {
                            alert("Put Serve as NUMBER Plase!!")
                        } else if ( coffeeUpdate === 0) {
                            alert("Put Serve at least One Please!!")
                        } else if ( coffeeUpdate > 10) {
                            alert("Put Serve maximum Ten Please!!")
                        } else {
                            updateFavCoffee(favList, coffeeUpdate  * 25);
                            setCustomDetail('')
                        }
                    }}>Fix</button>
                </div>
            <button className='backBtn' onClick={() => {setCustomDetail('')}}>Back</button>
        </div>
        )
    } else if (customDetail === 'roasting') {
        return (
            <div className='customDetail'>
                <div className='customRoasting'>
                    <button onMouseEnter={() => {setRoastingUpdate('light')}}
                        onClick={() => {
                        updateFavRoasting(favList, roastingUpdate);
                        setCustomDetail('')
                    }} className='light'>Light</button>
                    <button onMouseEnter={() => {setRoastingUpdate('medium')}}
                        onClick={() => {
                        updateFavRoasting(favList, roastingUpdate);
                        setCustomDetail('')
                    }} className='medium'>Medium</button>
                    <button onMouseEnter={() => {setRoastingUpdate('dark')}}
                        onClick={() => {
                        updateFavRoasting(favList, roastingUpdate);
                        setCustomDetail('')
                    }} className='dark'>Dark</button>
                </div>
            <button className='backBtn' onClick={() => {setCustomDetail('')}}>Back</button>
        </div>
        )
    }  else if (customDetail === 'grind') {
        return (
            <div className='customDetail'>
                <div className='customGrind'>
                    <button onMouseEnter={() => {setGrindUpdate('fine')}}
                        onClick={() => {
                        updateFavGrind(favList, grindUpdate);
                        setCustomDetail('')
                    }} className='fine'>Fine</button>
                    <button onMouseEnter={() => {setGrindUpdate('medium')}}
                        onClick={() => {
                        updateFavGrind(favList, grindUpdate);
                        setCustomDetail('')
                    }} className='medium'>Medium</button>
                    <button onMouseEnter={() => {setGrindUpdate('coarse')}}
                        onClick={() => {
                        updateFavGrind(favList, grindUpdate);
                        setCustomDetail('')
                    }} className='coarse'>Coarse</button>
                </div>
            <button className='backBtn' onClick={() => {setCustomDetail('')}}>Back</button>
        </div>
        )
    }
}

//Update each recipes 
//1. custom name
const updateFavName = async (oldFav, newFavName) => {
    console.log(oldFav, newFavName)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.favName === oldFav.favName) {
                return {
                    ...favourite,
                    favName: newFavName
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//2. custom Menu name
const updateFavMenu = async (oldFav, newFavMenu) => {
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.menuName === oldFav.menuName) {
                return {
                    ...favourite,
                    menuName: newFavMenu
                };
            }
            return favourite;
        });
        
        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//3. custom Method
const updateFavMethod = async (oldFav, newFavMethod) => {
    console.log(oldFav, newFavMethod)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.methodName === oldFav.methodName) {
                return {
                    ...favourite,
                    methodName: newFavMethod
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//4. custom Water
const updateFavWater = async (oldFav, newFavWater) => {
    console.log(oldFav, newFavWater)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.water === oldFav.water) {
                return {
                    ...favourite,
                    water: newFavWater
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//5. custom Ground Coffee
const updateFavCoffee = async (oldFav, newFavCoffee) => {
    console.log(oldFav, newFavCoffee)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.coffee === oldFav.coffee) {
                return {
                    ...favourite,
                    coffee: newFavCoffee
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//6. custom Roasting Level
const updateFavRoasting = async (oldFav, newFavRoasting) => {
    console.log(oldFav, newFavRoasting)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.roasting === oldFav.roasting) {
                return {
                    ...favourite,
                    roasting: newFavRoasting
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}

//7. custom Grind Size
const updateFavGrind = async (oldFav, newFavGrind) => {
    console.log(oldFav, newFavGrind)
    
    try {
        const updatedFavourites = favourites.map((favourite) => {
            if (favourite.grind === oldFav.grind) {
                return {
                    ...favourite,
                    grind: newFavGrind
                };
            }
            return favourite;
        });

        const newFav = updatedFavourites

        const response = await axios.put('http://localhost:8080/updateFavDetails', {
            email: userEmail,
            favourites : newFav
        })
        console.log(response.data.favourites);
        setFixedFav(response.data.favourites);
        setFavList(updatedFavourites.find((favourite) => favourite.order === oldFav.order));
    } 
    catch (error) {
        console.log(error)
    }
}
//custom description
const updateFavDescription = async () => {

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
            <div className='favDetailContainer'>
                {settingFavDetails()}
            </div>
        </div>
    </div>
  )
}
