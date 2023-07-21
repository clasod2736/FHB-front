import React, { useEffect } from 'react'
import './Finish.css'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Finish() {

  const { userName, menuName, methodName, serve, coffee, roasting, grind } = useParams();

  //Automatically Post brew history in DB after finish brewing
  useEffect(() => {
    async function getCurrentBrew() {
      const postOldUrl = 'http://localhost:8080/saveHistory'
      const putCurrentUrl = 'http://localhost:8080/deleteCurrentBrew'

      //use current time for organising recent brew and time that when make oldBrews.
      const order = Date.now();
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      const hour = date.getHours().toString();
      const minute = date.getMinutes().toString();
      const fullDate = hour + ":" + minute + " / " + day + ". " + month + ". " + year;
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
              coffee: coffee,
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
            coffee: 0,
            roasting: '',
            grind: ''
          }
        })
        console.log(response.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getCurrentBrew();
  }, [])

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
              to={`/${userName}/myRecipe`}
              onClick={ async () => {
                const postFvUrl = 'http://localhost:8080/saveFavourites'

                //use current time for organising brews
                const order = Date.now();
                const date = new Date();
                const year = date.getFullYear().toString();
                const month = (date.getMonth() + 1).toString();
                const day = date.getDate().toString();
                const hour = date.getHours().toString();
                const minute = date.getMinutes().toString();
                const fullDate = hour + ":" + minute + " / " + day + ". " + month + ". " + year;
                console.log(fullDate)

                //post favourites with currentBrews data
                try {
                  const response = await axios.post(postFvUrl, {
                    name : userName,
                      favourites : [{
                        order: order, 
                        date: fullDate,
                        menuName: menuName,
                        methodName : methodName,
                        serve: serve,
                        coffee: coffee,
                        roasting: roasting,
                        grind: grind
                      }]
                  })
                  console.log(response.data)
                } 
                catch (error) {
                  console.log(error)
                }
              }}>Save Favourite</Link>
              <Link to={`/${userName}/login`} className='tryAnother'>
                Try Another
              </Link>
              <button className='shop'>Explore Shop</button>
            </div>
          </div>
        </div>
    </div>
  )
}
