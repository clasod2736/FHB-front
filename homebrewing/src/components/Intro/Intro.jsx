import React, {useState, useEffect} from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
  console.log(isLogIn)
  const [ oldBrews, setOldBrews ] = useState([])

  const { userName, } = useParams();
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
              console.log(response.data)
              setOldBrews(response.data)
          }
          catch (error) {
              console.log(error)
          }
      }
    } else if(isLogIn === false){ return }
}, [])

//Set right Buttons with loggedIn or not
const settingButtons  = () => {
  if (isLogIn === false ) {
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
        <Link to={isLogIn ? '/menu' : '/login'} className='exploreBtn'>
          Make New Brew!
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