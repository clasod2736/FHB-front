import React from 'react'
import './Syphon.css'
import { useNavigate } from 'react-router-dom'

export default function Aeropress({ getMethod, method, isMobile }) {

const navigate = useNavigate()

const settingMobile = () => {
  if (isMobile) {
    return (
      <div className='syphonContainerMobile'>
        <div className='videoContainer'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c2LjmkknaVA"
            title="Brew Guide: Syphon" frameBorder="0"
            allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className='syphonOutline'>
                <div className='syphonOutlineText'>
                  <header>Syphon</header>
                  <p>Syphon or Vacuum Coffee Maker</p>
                  <p>extracts coffee scientifically.</p>
                  <p>With water and coffee moving repeatedly</p>
                  <p>It delivers rich aroma and flavors</p>
                  <p>offering a unique coffee experience.</p>
                </div>
                <div className='hashtag'>
                  <span>
                    <p>#LabQuality</p>
                    <p>#UniqueBrew</p>
                    <p>#Full-body</p>
                  </span>
                  <span>
                    <p>#SyphonBrew</p>
                    <p>#Durabillity</p>
                    <p>#ScienceInCup</p>
                  </span>
                </div>
                <span className='btnContainer'>
                  <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                  <button className='recipeBtn'
                  onClick={() => {navigate(`./${method}/recipe`);}}
                  >Choose Syphon</button>
                </span>
          </div>
      </div>
    )
  }  
}

  return (
    <div className='syphonContainer'>
        <div className='syphonOutline'  style={{display: isMobile ? 'none' : 'flex'}}>
              <div className='syphonOutlineText'>
                <header>Syphon</header>
                <p>Syphon or Vacuum Coffee Maker</p>
                <p>extracts coffee scientifically.</p>
                <p>With water and coffee moving repeatedly</p>
                <p>It delivers rich aroma and flavors</p>
                <p>offering a unique coffee experience.</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#LabQuality</p>
                  <p>#UniqueBrew</p>
                  <p>#Full-body</p>
                </span>
                <span>
                  <p>#SyphonBrew</p>
                  <p>#Durabillity</p>
                  <p>#ScienceInCup</p>
                </span>
              </div>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={() => {navigate(`./${method}/recipe`);}}
                >Choose Syphon</button>
              </span>
        </div>
        <div className='videoContainer'  style={{display: isMobile ? 'none' : 'flex'}}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c2LjmkknaVA"
          title="Brew Guide: Syphon" frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        {settingMobile()}
    </div>
  )
}
