import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Choices.css'

import { useSelector } from "react-redux";
import axios from 'axios';

//utils and api
import { getOldbrews } from '../../../api/oldBrews';
import getChoices from '../../../util/getChoice';
import getTime from '../../../util/getTime';

export default function Choices({ click }) {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);

  const [data, setData] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //save Favourite with choices
  const saveFavs = async () => {
    const postFvUrl = 'http://localhost:8080/saveFavourites'

      //use current time for organising brews
      const currentTime = getTime();

      //post favourites with currentBrews data
      try {
        const response = await axios.post(postFvUrl, {
          email : userEmail,
            favourites : [{
              favName: 'Your Choices!',
              order: currentTime[0], 
              date: currentTime[1],
              menuName: data.menu[0][0],
              methodName : data.method[0][0],
              water: data.water,
              coffee: data.coffee,
              roasting: data.roasting[0][0],
              grind: data.grind[0][0], 
              description: ''
            }]
        })
        if(response.status === 200) {
          alert("Your Most Choices Saved as Favs!")
        }
      } 
      catch (error) {
        console.log(error)
      }
  }

  //getOldbrews from DB
  useEffect(() => {
    if (isLogIn) {
      async function result () {
        const response = await getOldbrews(isLogIn, userEmail);
        const mostChoices = getChoices(response)
        setData(mostChoices)
      };
      result();
    }
  }, [click])

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='navBtn'>
        Choices
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' placement='end' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header className='slideHeader'>
          <Offcanvas.Title className='slideTitle'>Your Most Choices</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
            <div className='choices-container'>
              <div className='choice--total'>
                {data ? (
                <header>Your Total Brews: {data.totalBrew}</header>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--menu'>
                <p>Your most choice of Coffee</p>
                {data ? (
                <p className='data'>{data.menu[0][0]}</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--mehotd'>
                <p>Your most choice of Method</p>
                {data ? (
                <p className='data'>{data.method[0][0]}</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--roasting'>
                <p>Your most choice of Roasting level</p>
                {data ? (
                <p className='data'>{data.roasting[0][0]}</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--grind'>
                <p>Your most choice of Grind size</p>
                {data ? (
                <p className='data'>{data.grind[0][0]}</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--coffee'>
                <p>Your most choice of Coffee amout</p>
                {data ? (
                <p className='data'>'{data.coffee / 20}' serve</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
              <div className='choice--water'>
                <p>Your most choice of Water ratio</p>
                {data ? (
                <p className='data'>{data.water} ratio</p>
                ) : (
                <p>Loading...</p>
                )}
              </div>
            </div>
            <div className='btn-container'>
              <button onClick={() => {saveFavs()}}>Save Favourite with this.</button>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}