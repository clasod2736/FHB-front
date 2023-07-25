import React, {useState, useEffect} from 'react'
import './Intro.css'
import Logo from './Logo/NewLogo'

import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const [oldBrews, setOldBrews] = useState([])

  const { userName, } = useParams();
  const navigate = useNavigate();

  //fetch data for get recent brew data.
  useEffect(() => {
    async function fetchDatas() {
        const serverUrl = 'http://localhost:8080/getOldbrews'

        try {
            const response = await axios.get(serverUrl, {
                params: {
                    name: userName
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

//state and sort recent brew data.
function getRecentBrew() {

  if (isLogIn) {

    const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
  
    if (sortedBrews.length > 0) {
  
      setOldBrews([sortedBrews[0]]);
  
      navigate(`/${userName}/menu/${oldBrews.menuName}/method/${oldBrews.methodName}/recipe/brewing/${oldBrews.serve}/${oldBrews.coffee}/${oldBrews.roasting}/${oldBrews.grind}/step1`)
  
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
          <div className='expContatiner'>
            <button className='exploreBtn'
            onClick={() => {getRecentBrew()}}>
              Make Last Brew!
            </button>
            <Link to={isLogIn ? `/${userName}/menu` : '/login'} className='exploreBtn'>
              Make a New Brew!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}