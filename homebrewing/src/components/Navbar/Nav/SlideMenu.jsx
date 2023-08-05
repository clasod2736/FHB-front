import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SlideMenu.css'

export default function SlideMenu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='menuBtn'>
        About
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas' scroll={false} backdrop={true} restoreFocus={true} aria-modal={false}>
        <Offcanvas.Header className='slideHeader'>
          <Offcanvas.Title className='slideTitle'>About FHB.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvasBody'>
          <div className='about'>
            <div className='aboutText'>
              <p>Hi! I'm Joon this is my first Full-Stack React project.</p>
              <p>This "Mock" web-project is designed for providing</p>
              <p>easy-access to how to make "Awesome" coffee at home!</p>
              <p>The website desinged easy, simple and intuitive.</p>
              <p>This web has lots of mock datas and Lorem ipsums.</p>
              <p>Because this is not real coffee brewing web-site.</p>
              <p>But the most important point is</p>
              <p>that user can easily check brew history and</p>
              <p>customize their favourite brews by themselves.</p>
            </div>
          </div>
          <div className='bottom'>
            <div className='title'>
              <header>Language & Framework & Library</header>
              <h1>used for this project</h1>
            </div>
              <div className='techs'>
                <div className='firstRow'>
                  <p>Html</p>
                  <p>CSS</p>
                  <p>SCSS</p>
                  <p>Javascript</p>
                </div>
                <div className='secondRow'>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Express</p>
                  <p>Bootstrap</p>
                </div>
                <div className='thirdRow'>
                  <p>Axios</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                </div>
              </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}