import React from 'react'
import './Mokapot.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Mokapot({ getMethod, method }) {

const navigate = useNavigate()
const { userName } = useParams();

  return (
    <div className='mokapotContainer'>
        <div className='mokapotOutline'>
          <div className='mokapotOutlineText'>
            <header>Moka Pot</header>
            <p>Contrary to popular belief, Lorem is not simply</p>
            <p>epeat predefined chunks as nece</p>
            <p> embarrassing hid</p>
            <p>ave suffered alteration in some form, by injected</p>
            <p>popular belief, Lorem is not simply random</p>
          </div>
          <div className='hashtag'>
            <span>
              <p>#Espresso</p>
              <p>#Crema</p>
              <p>#Portable</p>
              <p>#Italiancoffee</p>
            </span>
            <span>
              <p>#Bialetti</p>
              <p>#Durabillity</p>
              <p>#Easytomake</p>
            </span>
          </div>
          <span className='btnContainer'>
            <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
            <button className='recipeBtn'
            onClick={ async () => {
              const serverUrl = 'http://localhost:8080/method'
              console.log(method)

              //update methodNamw in database
              try {
                const response = await axios.put(serverUrl, {
                  name : userName,
                  currentBrews : {
                      methodName : method
                  } 
                })
                
                console.log(response.data.currentBrews);
              } 
              catch (error) {
                console.log(error)
              }

              navigate(`./${method}/recipe`);
            }}
            >Choose Moka Pot</button>
          </span>
        </div>
        <div className='videoContainer'>
          <video src="/video/howToMoka.mp4" controls></video>
        </div>
    </div>
  )
}
