import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import './Beans.css'

// Image
import { ReactComponent as BeanArt } from '../../assets/beanArt.svg'
import { ReactComponent as Robusta } from '../../assets/robusta.svg'
import { ReactComponent as Arabica } from '../../assets/arabica.svg'
import { ReactComponent as Liberica } from '../../assets/liberica.svg'
import { ReactComponent as Excelsa } from '../../assets/excelsa.svg'

// Components
import Type from './Type/Type'
import Grind from './Grind/Grind'
import Roasting from './Roasting/Roasting'

export default function Beans() {
  const [bean, setBean] = useState('');
  const [roasting, setRoasting] = useState('');
  const [grind, setGrind] = useState('');

  const navigate = useNavigate();
  const { userName } = useParams();
  const { menuName } = useParams();
  const { methodName } = useParams();

  console.log(methodName)
  console.log(menuName)

  // 빈타입용 함수.
  const getBeans = (beanType) => {
    console.log(beanType);
    setBean(beanType);
  } 
  const settingBean = () => {
    if (bean === 'arabica') {
      return (
        <div className='arabica'>
          <h3>Arabica</h3>
        </div>
      )
    } else if (bean === 'robusta') {
      return (
        <div className='robusta'>
          <h3>Robusta</h3>
        </div>
      )
    } else if (bean === 'liberica') {
      return (
        <div className='liberica'>
          <svg width={'150px'} height={'80px'} viewBox='50 170 400 180'>
            <Liberica/>
          </svg>
          <h3>liberica</h3>
        </div>
      )
    } else if (bean === 'excelsa') {
      return (
        <div className='excelsa'>
          <svg width={'150px'} height={'80px'} viewBox='50 170 400 180'>
            <Excelsa/>
          </svg>
          <h3>Excelsa</h3>
        </div>
      )
    } else {
      return (
        <div className='beanEmpty'>
          Beans
        </div>
      )
    }
  }
  // 로스팅용 함수
  const getRoasting = (roastingLevel) => {
    console.log(roastingLevel)
    setRoasting(roastingLevel)
  }
  const settingRoasting = () => {
    if (roasting === 'dark') {
      return (
        <div className='dark'>
          Dark
        </div>
      )
    } else if (roasting === '') {
      return (
      <div className='roastingEmpty'>
          Roast
      </div>
      )
    }
  }

  // 그라인더용 함수
  const getGrind = (grindLevel) => {
    console.log(grindLevel)
    setGrind(grindLevel)
  }
  const settingGrind = () => {
    if (grind === 'coarse') {
      return (
        <div className='coarse'>
          <header>Medium</header>
        </div>
      )
    } else if (grind === '') {
      return (
        <div className='grindEmpty'>
          Grind
        </div>
      )
    }
  }

  const handleLink = () => {
    if (bean && roasting && grind === '') {
      return alert('please put choices of Bean!')
    } else return `/${userName}/menu/${menuName}/method/${methodName}/bean/${bean}/${roasting}/${grind}/recipe` 
  }

  return (
    <div className='beanContainer'>
      <div className='outLine'>
        <span className='beanHeader'>
          <div className='beanTitle'>
          <header>Bean Guide</header>
            <svg width={'200px'} height={'150px'} viewBox='100 200 250 150' rotate={'180deg'} style={{ transform: 'rotate(225deg)'}}>
              <BeanArt/>
            </svg>
          </div>
          <div className='beanText'>
            <p>There are many variations of passages of Lorem Ipsum available, but have suffered alteration in some form.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </span>
        <span className='beanImg'>
          <img src="/img/background/rawBeans.jpg" alt="beanImg"/>
        </span>
      </div>
      <div className='category'>
        <span className='beanType'>
          <Type getBeans={getBeans}/>
        </span>
        <span className='roastContainer'>
          <Roasting getRoasting={getRoasting}/>
        </span>
        <span className='finesse'>
          <Grind getGrind={getGrind}/>
        </span>
        <span className='beanResult'>
          <div className='recommendation'>
          </div>
          <div className='choices'>
            <span className='beanChoice'>
              {settingBean()}
            </span>
            <span className='roastingChoice'>
              {settingRoasting()}
            </span>
            <span className='grindChoice'>
              {settingGrind()}
            </span> 
          </div>
          <div className='resultText'>
            <p>combined with a handful of model sentence structures, to generate</p>
            <p>discovered the undoubtable source. Lorem Ipsum comes from sections </p>
            <p>it over 2000 years old. Richard McClintock</p>
            <Link className='goShop'>Go to Shop Beans!</Link>
            <Link to={handleLink}
            onClick={() => {
              if (bean && roasting && grind === '') {
                return (
                  alert('please put choices of Bean!')
                )
              }
              else {navigate(`/${userName}/menu/${menuName}/method/${methodName}/bean/${bean}/${roasting}/${grind}/recipe`)}}} className='goRecipe'>Go to Recipe!</Link>
          </div>
        </span>
      </div>
    </div>
  )
}
