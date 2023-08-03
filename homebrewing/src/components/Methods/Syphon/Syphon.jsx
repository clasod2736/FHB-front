import React from 'react'
import './Syphon.css'
import { useNavigate } from 'react-router-dom'

export default function Aeropress({ getMethod, method }) {

const navigate = useNavigate()

  return (
    <div className='shyponContainer'>
        <div className='shyponOutline'>
              <div className='shyponOutlineText'>
                <header>Shypon</header>
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
        <div className='videoContainer'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c2LjmkknaVA"
          title="Brew Guide: Syphon" frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>
  )
}
