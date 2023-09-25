import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Choices.css'

import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

import { getOldbrews } from '../../../api/oldBrews';
import getChoices from '../../../util/getChoice';

export default function Choices({ click }) {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);

  const [totalBrew, setTotalBrew] = useState(0);
  const [data, setData] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //getOldbrews from DB
  useEffect(() => {
    async function result () {
      const response = await getOldbrews(isLogIn, userEmail);
      console.log(response)
      setTotalBrew(response.length)
      const mostChoices = getChoices(response)
      setData(mostChoices)
    };
    result();
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
                <header>Your Total Brews: {totalBrew}</header>
              </div>
              <div className='choice--menu'>
                <p>Your most choice of Coffee</p>
                <p className='data'>{data.menu[0][0]}</p>
              </div>
              <div className='choice--mehotd'>
                <p>Your most choice of Method</p>
                <p className='data'>{data.method[0][0]}</p>
              </div>
              <div className='choice--roasting'>
                <p>Your most choice of Roasting level</p>
                <p className='data'>{data.roasting[0][0]}</p>
              </div>
              <div className='choice--grind'>
                <p>Your most choice of Grind size</p>
                <p className='data'>{data.grind[0][0]}</p>
              </div>
            </div>
            <div className='btn-container'>
              <button onClick={() => {}}>Save Favourite with this.</button>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}