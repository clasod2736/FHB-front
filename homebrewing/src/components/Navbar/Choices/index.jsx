import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Choices.css'

import { useNavigate } from 'react-router-dom'

export default function Choices() {

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
          <Offcanvas.Title className='slideTitle'>Your Most Choices</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
            <div className='choicesContainer'>
              <div className=''>
                
              </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}