import React, {useState, useEffect} from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
  const [ oldBrews, setOldBrews ] = useState([])
  const [ recentBrew, setRecentBrew ] = useState(null);

  const navigate = useNavigate();

//fetch data for get recent brew data.
  useEffect(() => {
    
    if (isLogIn === true) {
      
      fetchDatas();

      async function fetchDatas() {
          const serverUrl = 'http://localhost:8080/getOldbrews'
  
          try {
              const response = await axios.get(serverUrl, {
                  params: {
                      email: userEmail
                  }
              })
              setOldBrews(response.data)

              //state and sort recent brew data.
              const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
              setRecentBrew(sortedBrews[0]);
          }
          catch (error) {
              console.log(error)
          }
      }
    } else if(isLogIn === false){ return }
}, [isLogIn, oldBrews, userEmail])

//set recentBrew
useEffect(()=> {
  const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
  setRecentBrew(sortedBrews[0]);
}, [oldBrews])

//Set right Buttons with loggedIn or not
const settingButtons  = () => {
  if (isLogIn === false ) {
    return (
      <div className='loginContainer'>
        <button className='login' onClick={() => { navigate('/login')}}>
          Login!
        </button>
      </div>
    )
  } else {
    return (
      <div className='expContainer'>
        <button className='exploreBtn'
        onClick={() => {
          if (isLogIn) {
            recentBrew !== null ? 
            navigate(`/menu/${recentBrew.menuName}/method/${recentBrew.methodName}/recipe/${recentBrew.water}/${recentBrew.coffee}/${recentBrew.roasting}/${recentBrew.grind}/brewing`)
            :
            alert("You don't have Any History...make a New Brew!")
          }
        }}>
          Make Last Brew!
        </button>
        <Link to={isLogIn ? '/menu' : '/login'} className='exploreBtn'>
          Make New Brew!
        </Link>
      </div>
    )
  }
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