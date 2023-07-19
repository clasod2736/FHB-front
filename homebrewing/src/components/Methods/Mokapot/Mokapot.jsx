import React, {useState} from 'react'
import './Mokapot.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Component
import Carousel from './Carousel/Carousel'

// Icons
import {BsImages} from 'react-icons/bs'
import {BiSolidVideos} from 'react-icons/bi'
import {AiTwotoneShopping} from 'react-icons/ai'

// SVG
import { ReactComponent as Bialetti } from '../../../assets/bialetti.svg'
import { ReactComponent as Delonghi } from '../../../assets/delonghi.svg'
import { ReactComponent as Alessi } from '../../../assets/alessi.svg'

export default function Basic({ getMethod, method }) {

const navigate = useNavigate()
const { userName } = useParams();

const [link, setLink] = useState('');

//handle links
const handleLinks = () => {
    if (link === 'image' || link === '') {
      return (
        <div className='carouselContainer'>
          <Carousel/>
        </div>
      )
    } else if (link === 'video') {
      return (
        <div className='videoContainer'>
          <video src="/video/howToMoka.mp4" controls></video>
        </div>
      )
    } else if (link === 'shop') {
      return (
        <div className='shopContainer'>
          <div className='brands'>
            <header>BRANDS WE LOVE</header>
            <span className='brandsLogo'>
              <svg width={'200px'} height={'150px'} viewBox='50 700 2500 120'>
                <Bialetti/>
              </svg>
              <svg width={'200px'} height={'100px'} viewBox='0 -10 250 120'>
                <Delonghi/>
              </svg>
              <svg width={'200px'} height={'150px'} viewBox='0 300 2500 120'>
                <Alessi/>
              </svg>
            </span>
            <span className='brandsContents'>
              <div className='brandsText'>
                <p>ima veniam, quis nostrum exercitationem ullam</p>
                <p>eum iure reprehenderit qui i</p>
                <p>magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p> qui dolorem ipsum quia dolor sit amet</p>
                <a href="https://www.bialetti.com/">Go to Official Website</a>
              </div>
              <div className='recommendProduct'>
                  <h3>Recommend</h3>
                  <img src="/img/mokapot(BGremoved).png" alt="mokapotProduct" />
                  <p>Bialetti moka express</p>
                  <p>espresso maker</p>
                  <p>2-cup 49$</p>
                  <a href="http://"> Go link.</a>
              </div>
            </span>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='mokapotContainer'>
        <div className='mokapotOutline'>
              <div className='mokapotOutlineText'>
                <header>Moka Pot</header>
                <p>Contrary to popular belief, Lorem is not simply random text roots</p>
                <p>epeat predefined chunks as nece</p>
                <p> embarrassing hid</p>
                <p>ave suffered alteration in some form, by injected</p>
                <p>popular belief, Lorem is not simply random</p>
              </div>
              <div className='hashtag'>
                <span>
                  <p>#Espresso</p>
                  <p>#Crema</p>
                  <p>#Portable</p>
                  <p>#Italiancoffee</p>
                </span>
                <span>
                  <p>#Bialetti</p>
                  <p>#Durabillity</p>
                  <p>#Easytomake</p>
                </span>
              </div>
              <span className='links'>
                <div onClick={() => {setLink('image')}}>
                  <BsImages id='linkIcon'/>
                  <p>image</p>
                </div>
                <div onClick={() => {setLink('video')}}>
                  <BiSolidVideos id='linkIcon'/>
                  <p>video</p>
                  </div>
                <div onClick={() => {setLink('shop')}}>
                  <AiTwotoneShopping id='linkIcon'/>
                  <p>shop</p>
                </div>
              </span>
              <span className='btnContainer'>
                <button className='backBtn' onClick={() => {getMethod('')}}>Back</button>
                <button className='recipeBtn'
                onClick={ async () => {
                  const serverUrl = 'http://localhost:8080/method'
                  console.log(method)

                  try {
                    const response = await axios.put(serverUrl, {
                      name : userName,
                      currentBrews : {
                          methodName : method
                      } 
                    })
                    console.log(response.data)
                  } catch (error) {
                    console.log(error)
                  }

                  navigate(`./${method}/recipe`);
                }}
                >Go to Recipe!</button>
              </span>
            </div>
            <div className='mokapotPresentation'>
              {handleLinks()}
            </div>
    </div>
  )
}
