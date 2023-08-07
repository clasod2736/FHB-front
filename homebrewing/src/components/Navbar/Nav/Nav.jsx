import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Nav.css'

import {Link, useParams} from 'react-router-dom'

export default function SlideMenu() {
  const { userName, menuName, methodName } = useParams()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='navBtn'>
        Nav
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' placement='end' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header className='slideHeader'>
          <Offcanvas.Title className='slideTitle'>Navigation of FHB</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
            <div className='nav'>
              <Link className='links' to={`/login/${userName}`}>
                Intro
              </Link>
              <Link 
              className='links'
              to={`${userName}/menu`}>
                Coffee Menu
              </Link>
              <Link
              className='links'
              to={`${userName}/menu/${menuName}/method`}>
                Coffee Method
              </Link>
              <Link
              className='links'
              to={`${userName}/menu/${menuName}/method/${methodName}/recipe`}>
                Recipe
              </Link>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}