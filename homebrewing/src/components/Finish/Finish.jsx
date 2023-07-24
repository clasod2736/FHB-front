import React, { useEffect, useState } from 'react'
import './Finish.css'

import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Finish() {
  const [favOpen, setFavOpen] = useState(false);
  const [favName, setFavName] = useState('');
  const [favResponse, setFavResponse] = useState('');
  const [saved, setSaved] = useState(false);

  const { userName, menuName, methodName, serve, coffee, roasting, grind } = useParams();
  const navigate = useNavigate();

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
      const fullDate = hour + ":" + minute + " / " + day + "." + month + "." + year;
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

  //get error response if Fav store is full.
  useEffect(() => {
    if (favResponse === "422") {
      alert('You have 5 favourite brew already! You can manage in My Recipe page.')
      setFavResponse('')
      navigate(`/${userName}/myRecipe`)
      return
    }
  }, [ favResponse ])

  //Post favourite brew in DB
  const saveFavBrews = async () => {
    
    if (favName === '' ) {
      alert('Please put name.')
      return
    } else if (favName.length > 15) {
      alert('Please put name less 10 letters')
      setFavName('')
    } 
    
    else {

      const postFvUrl = 'http://localhost:8080/saveFavourites'

      //use current time for organising brews
      const order = Date.now();
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      const hour = date.getHours().toString();
      const minute = date.getMinutes().toString();
      const fullDate = hour + ":" + minute + " / " + day + "." + month + "." + year;

      //post favourites with currentBrews data
      try {
        const response = await axios.post(postFvUrl, {
          name : userName,
            favourites : [{
              favName: favName,
              order: order, 
              date: fullDate,
              menuName: menuName,
              methodName : methodName,
              serve: serve,
              coffee: coffee,
              roasting: roasting,
              grind: grind,
              description: ''
            }]
        })
        console.log(response)
        setFavResponse(JSON.stringify(response.status))
      } 
      catch (error) {
        console.log(error)
        const errMessage = error.response.status
        setFavResponse(JSON.stringify(errMessage));
        console.log(favResponse)
      }
    }
  }
  
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
              <button className='recipe'
              onClick={() => {
                setFavOpen(true);
                setSaved(false)
                }}>Save Favourite</button>
              <Link to={`/${userName}/login`} className='tryAnother'>
                Try Another
              </Link>
              <button className='shop'>Explore Shop</button>
            </div>
            <div className='favSubmit' style={{ display: favOpen ? 'flex' : 'none'}}>
              <input type="text" className='favNameInput' placeholder='Name of Fav'
              onChange={(e) => {setFavName(e.target.value)}}
              value={favName}/>
              <div className='btnContainer'>
                <button onClick={() => {setFavOpen(false)}}>X</button>
                <button className='submitBtn' to={`/${userName}/myRecipe`}
                onClick={() => {saveFavBrews();
                                setFavOpen(false);
                                setSaved((prev) => !prev);}}
                >Submit</button>
              </div>
            </div>
            <p className="savedText" style={{ display: saved ? 'flex' : 'none'}}>Saved!</p>
          </div>
        </div>
    </div>
  )
}
