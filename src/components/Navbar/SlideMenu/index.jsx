import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./SlideMenu.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export default function SlideMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="menuBtn">
        About
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="aboutCanvas"
        scroll={true}
        backdrop={true}
        restoreFocus={true}
        aria-modal={false}
      >
        <Offcanvas.Header className="aboutHeader">
          <Offcanvas.Title className="aboutTitle">About FHB.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="aboutBody">
          <div className="about">
            <div className="aboutText">
              <p>Hi! I'm Joon this is my first Full-Stack React project.</p>
              <p>This "Mock" web-project is designed for providing</p>
              <p>easy-access to how to make "Awesome" coffee at home!</p>
              <p>The website desinged easy, simple and intuitive.</p>
              <p>The most important point is</p>
              <p>that user can easily check brew history and</p>
              <p>customize their favourite brews by themselves.</p>
            </div>
          </div>
          <div className="aboutMe">
            <header>Developed By Joon Park</header>
            <div className="personalLinks">
              <a href="www.linkedin.com/in/joon-park-772a8820b">
                <BsLinkedin />
              </a>
              <a href="https://github.com/clasod2736">
                <BsGithub />
              </a>
              <a href="www.linkedin.com/in/joon-park-772a8820b">
                <TbWorld />
              </a>
            </div>
            <p>I'm a self-taught web developer</p>
            <p>Always enojying learning coding and new Techs</p>
            <p>Mainly focused on Web-developement,</p>
            <p>but open-minded to any techs in IT!</p>
            <p>check my coding journey on top links.</p>
          </div>
          <div className="bottom">
            <div className="title">
              <header>Language & Framework & Library</header>
              <h1>used for this project</h1>
            </div>
            <div className="techs">
              <div className="firstRow">
                <p>Html</p>
                <p>CSS</p>
                <p>SCSS</p>
                <p>Javascript</p>
              </div>
              <div className="secondRow">
                <p>React</p>
                <p>Redux</p>
                <p>Express</p>
                <p>Bootstrap</p>
              </div>
              <div className="thirdRow">
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
