import React from 'react'
import './Hario.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Aeropress({ getMethod, method }) {

const navigate = useNavigate()
const { userName } = useParams();

  return (
    <div className='harioContainer'>
        <div className='harioOutline'>
              <div className='harioOutlineText'>
                <header>Hario V6</header>
                <p>Contrary to popular belief, Lorem is not simply random text roots</p>
                <p>epeat predefined chunks as nece</p>
                <p> embarrassing hid</p>
                <p>ave suffered alteration in some form, by injected</p>
                <p>popular belief, Lorem is not simply random</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#Convenient</p>
                  <p>#Softtaste</p>
                  <p>#Compact</p>
                  <p>#Aromatic</p>
                </span>
                <span>
                  <p>#Aeropress</p>
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
                >Choose Hario V6</button>
              </span>
        </div>
        <div className='videoContainer'>
          <video src="/video/aeropress.mp4" controls></video>
        </div>
    </div>
  )
}
