import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Menu.css'

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='menuBtn'>
        Guide
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Get tired??</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
            lets make coffee at home!!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
