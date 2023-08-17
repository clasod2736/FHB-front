import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Nav.css'

import {Link, useParams} from 'react-router-dom'

export default function SlideMenu() {
  const { menuName, methodName } = useParams()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='navBtn'>
        Navigation
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' placement='end' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header className='slideHeader'>
          <Offcanvas.Title className='slideTitle'>Navigation of FHB</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
            <div className='nav'>
              <div className='navText'>
                <p>These navigation links set only for browser.</p>
                <p>It won't not working to next steps.</p>
                <p>So just only can browsing page.</p>
              </div>
              <div className='linksContainer'>
                <Link className='links' to={'/'}>
                  Home
                </Link>
                <Link className='links' to={'/login'}>
                  Log In
                </Link>
                <Link className='links' to={'/register'}>
                  Register
                </Link>
                <Link 
                className='links'
                to={`/menu`}>
                  Coffee Menu
                </Link>
                <Link
                className='links'
                to={`/menu/${menuName}/method`}>
                  Coffee Method
                </Link>
                <Link
                className='links'
                to={`/menu/${menuName}/method/${methodName}/recipe`}>
                  Recipe
                </Link>
                <Link className='links' to={'/menu/latte/method/chemax/recipe/0/0/medium/medium/brewing'}>
                  Brewing
                </Link>
                <Link className='links' to={'/finish'}>
                  Finish
                </Link>
                <Link 
                className='links'
                to={'/myRecipe'}
                >
                My Recipe
                </Link>
              </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}