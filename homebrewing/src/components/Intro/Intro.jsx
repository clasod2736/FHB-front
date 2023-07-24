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

function getRecentBrew() {
  const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
}

  return (
    <div className='introContainer'>
      <div className='logoContainer'>
        <div className='gate'>
          <Logo/>
          <div className='expContatiner'>
            <button className='exploreBtn'
            onClick={() => {
              navigate(`/${userName}/menu/${menuName}/method/${methodName}/recipe/brewing/${serve}/${coffee}/${roasting}/${grind}/step1`)
            }}>
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