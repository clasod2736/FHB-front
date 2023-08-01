import React, {useState, useEffect} from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userId = useSelector((state) => state.userId);
  const [ oldBrews, setOldBrews ] = useState([])
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const { userName, } = useParams();
  const navigate = useNavigate();

//fetch data for get recent brew data.
  useEffect(() => {
    const localInfo =  localStorage.getItem('userInfo')
    const userInfo = JSON.parse(localInfo);
    const isLoggedIn = userInfo.isLoggedIn;
    console.log("User LoggedIn?:", isLoggedIn);

    async function fetchDatas() {
        const serverUrl = 'http://localhost:8080/getOldbrews'

        try {
            const response = await axios.get(serverUrl, {
                params: {
                    _id: userId
                }
            })
            console.log(response.data)
            setOldBrews(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    if (isLoggedIn === false ) {
      return
    } else {
      fetchDatas();
      setIsLoggedIn(true);
    }
}, [])

//Set right Buttons with loggedIn or not
const settingButtons  = () => {
  if (isLoggedIn === false ) {
    return (
      <div className='loginContainer'>
        <Link className='login' to={'/login'}>
          Login!
        </Link>
      </div>
    )
  } else {
    return (
      <div className='expContainer'>
        <button className='exploreBtn'
        onClick={() => {getRecentBrew()}}>
          Make Last Brew!
        </button>
        <Link to={isLogIn ? `/${userName}/menu` : '/login'} className='exploreBtn'>
          Make a New Brew!
        </Link>
      </div>
    )
  }
}

//state and sort recent brew data.
function getRecentBrew() {

  if (isLogIn) {

    const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
  
    if (sortedBrews.length > 0) {
  
      setOldBrews([sortedBrews[0]]);
  
      navigate(`/${userName}/menu`)
  
      console.log(oldBrews)
    } else {
  
      alert("You don't have Any History...make a New Brew!")
  
    }
  }
  else navigate('/login')

}

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          <Logo/>
          {settingButtons()}
        </div>
      </div>
    </div>
  )
}