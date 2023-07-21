import React, { useEffect } from 'react'
import './Finish.css'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Finish() {

  const { userName, menuName, methodName, serve, roasting, grind } = useParams();

  useEffect(() => {
    async function getCurrentBrew() {
      const serverUrl = 'http://localhost:8080/finish'
  
      const response = await axios.get (serverUrl, {
        params: {
          name : userName
        }
      })
      console.log(response.data)
    }
    getCurrentBrew();
  }, [userName])

  return (
    <div className='finishContainer'>
        <div className='finishContents'>
          <div className='finishText'>
            <header>How was your Coffee today?</header>
            <div className='pContainer'>
              <p>It is a long established fact that a reader will be distracted</p>
              <p>it look like readable English. Many desktop</p>

            </div>
            <div className='btnContainer'>
              <Link className='recipe'
              to={`${userName}/myRecipe`}
              onClick={ async () => {
                const postOldUrl = 'http://localhost:8080/saveRecipe'
                const putCurrentUrl = 'http://localhost:8080/deleteCurrentBrew'

                //use current time for organising recent brew and time that when make oldBrews.
                const order = Date.now();
                const date = new Date();
                const year = date.getFullYear().toString();
                const month = (date.getMonth() + 1).toString();
                const day = date.getDate().toString();
                const hour = date.getHours().toString();
                const minute = date.getMinutes().toString();
                const fullDate = hour + ":" + minute + ", " + day + ", " + month + ", " + year;
                console.log(fullDate)

                //post oldBrews with currentBrews data first.
                try {
                  const response = await axios.post(postOldUrl, {
                    name : userName,
                      oldBrews : [{
                        order: order, 
                        date: fullDate,
                        menuName: menuName,
                        methodName : methodName,
                        serve: serve,
                        roasting: roasting,
                        grind: grind
                      }]
                  })
                  console.log(response.data)
                } 
                catch (error) {
                  console.log(error)
                }

                //And reset currentBrews data in DB
                try {
                  const response = await axios.put(putCurrentUrl, {
                    name : userName,
                    currentBrews: {
                      menuName: '',
                      methodName : '',
                      serve: 0,
                      roasting: '',
                      grind: ''
                    }
                  })
                  console.log(response.data)
                } 
                catch (error) {
                  console.log(error)
                }
              }}>Save Recipe</Link>
              <Link to={`/login/${userName}`} className='tryAnother'>
                Try Another
              </Link>
              <button className='shop'>Explore Shop</button>
            </div>
          </div>
        </div>
    </div>
  )
}
