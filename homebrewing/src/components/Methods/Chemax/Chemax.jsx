import React from 'react'
import './Chemax.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Chemax({ getMethod, method }) {

const navigate = useNavigate()
const { userName } = useParams();

  return (
    <div className='chemaxContainer'>
        <div className='chemaxOutline'>
          <div className='chemaxOutlineText'>
            <header>Chemax</header>
            <p>Contrary to popular belief, Lorem is not simply</p>
            <p>epeat predefined chunks as nece</p>
            <p> embarrassing hid</p>
            <p>ave suffered alteration in some form, by injected</p>
            <p>popular belief, Lorem is not simply random</p>
          </div>
          <div className='hashtag'>
            <span>
              <p>#Americano</p>
              <p>#Aromatic</p>
              <p>#Fragile</p>
              <p>#Mildtaste</p>
            </span>
            <span>
              <p>#Chemax</p>
              <p>#Durabillity</p>
              <p>#Seinsitive</p>
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
            >Choose Chemax</button>
          </span>
        </div>
        <div className='videoContainer'>
          <video src="/video/chemax.mp4" controls></video>
        </div>
    </div>
  )
}
