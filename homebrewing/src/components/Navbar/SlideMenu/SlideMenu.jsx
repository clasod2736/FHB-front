import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SlideMenu.css'

import {Link, useParams} from 'react-router-dom'

export default function SlideMenu() {
  const { userName, menuName, methodName } = useParams()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='menuBtn'>
        Nav.
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header className='slideHeader'>
          <Offcanvas.Title className='slideTitle'>Navigation of FHB</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
          <Link 
          className='menu'
          to={`${userName}/menu`}>
            Coffee Menu
          </Link>
          <Link
          className='method'
          to={`${userName}/menu/${menuName}/method`}>
            Coffee Method
          </Link>
          <Link
          className='recipe'
          to={`${userName}/menu/${menuName}/method/${methodName}/recipe`}>
            Recipe
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
