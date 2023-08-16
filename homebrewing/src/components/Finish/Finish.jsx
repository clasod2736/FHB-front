import React, { useEffect, useState } from 'react'
import './Finish.css'

import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Finish() {
  const userEmail = useSelector((state) => state.userEmail);

  const [favOpen, setFavOpen] = useState(false);
  const [favName, setFavName] = useState('');
  const [favResponse, setFavResponse] = useState('');
  const [saved, setSaved] = useState(false);

  const { menuName, methodName, water, coffee, roasting, grind } = useParams();
  const navigate = useNavigate();

  //Automatically Post brew history in DB after finish brewing
  useEffect(() => {
    async function getCurrentBrew() {
      const postOldUrl = 'http://localhost:8080/saveHistory'

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
          email : userEmail,
            oldBrews : [{
              order: order, 
              date: fullDate,
              menuName: menuName,
              methodName : methodName,
              water: water,
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
    }
    getCurrentBrew();
  }, [])

  //get error response if Fav store is full.
  useEffect(() => {
    if (favResponse === "422") {
      setSaved(false);
      alert('You have 5 favourite brew already! You can manage in My Recipe page.')
      setFavResponse('')
      navigate(`/myRecipe`)
      return
    }
  }, [ favResponse ])

  //Post NEW favourite brew in DB
  const saveFavBrews = async () => {
    
    if (favName === '' ) {
      alert('Please put name.')
      return
    } else if (favName.length > 10) {
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
          email : userEmail,
            favourites : [{
              favName: favName,
              order: order, 
              date: fullDate,
              menuName: menuName,
              methodName : methodName,
              water: water,
              coffee: coffee,
              roasting: roasting,
              grind: grind, 
              description: ''
            }]
        })

        console.log(response)
        setFavResponse(JSON.stringify(response.status))
        setFavName('')
      } 
      catch (error) {

        console.log(error)
        const errMessage = error.response.status
        setFavResponse(JSON.stringify(errMessage));
        console.log(favResponse)
        return

      }
    }
  }
  
  return (
    <div className='finishContainer'>
        <div className='finish'>
          <div className='finishContents'>
            <header>How was your Coffee today?</header>
            <div className='finishText'>
              <p>Thanks for your journey with FHB.</p>
              <p>You can check your brew history in MyRecipe page.</p>
              <p>Try different coffee everytime!</p>
            </div>
            <div className='btnContainer'>
              <button className='recipe'
              onClick={() => {

                setFavOpen(true);
                setSaved(false)

                }}>Save Favourite</button>
              <Link to={'/menu'} className='tryAnother'>
                Try Another
              </Link>
              <button className='shop'>About Developer</button>
            </div>
            <div className='favSubmit' style={{ display: favOpen ? 'flex' : 'none'}}>
              <input type="text" className='favNameInput' placeholder='Name of Fav'
              onChange={(e) => {setFavName(e.target.value)}}
              value={favName}/>
              <div className='btnContainer'>
                <button onClick={() => {setFavOpen(false)}}>X</button>
                <button className='submitBtn'
                onClick={() => {

                  saveFavBrews();
                  setFavOpen(false);

                }}
                >Submit</button>
              </div>
            </div>
            <div className='afterSaveFav' style={{ display: saved ? 'flex' : 'none'}}>
              <p>Saved!</p>
              <Link className='goMyRecipeBtn' to={'/myRecipe'}>Check in My Recipe Page</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
