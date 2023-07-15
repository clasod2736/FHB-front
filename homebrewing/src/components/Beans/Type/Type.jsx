import React, {useState} from 'react'
import './Type.css'

import { ReactComponent as Arabica } from '../../../assets/arabica.svg'
import { ReactComponent as Robusta } from '../../../assets/robusta.svg'
import { ReactComponent as Liberica } from '../../../assets/liberica.svg'
import { ReactComponent as Excelsa } from '../../../assets/excelsa.svg'

export default function Type({ getBeans }) {
  const [selectedType, setSelectedType] = useState('');
  getBeans(selectedType);

  const handleTypeClick = (type) => {
    if (selectedType === type) {
        setSelectedType('');
      } else setSelectedType(type);
    };
  const getOpacity = (type) => {
    if (selectedType === '') {
        return 1;
    } else return selectedType === type ? 1 : 0.2;
  };
  const getChecked = (type) => {
    if (selectedType === type) {
        return true
    } else return false
  };
  
  return (
    <div className='typeContainer'>
        <span className='arabica'
        style={{ opacity: getOpacity('arabica'), transition: '0.3s'}}>
            <svg width={'100px'} height={'100px'} viewBox='140 200 220 120' style={{ opacity: '0.9'}}>
            <Arabica/>
            </svg>
            <header>Arabica</header>
            <div className='arabicaText'>
            <h3>Productivity</h3>
            <p>70% World Consumption</p>
            <h3>Origin</h3>
            <p>Ethiopia</p>
            <h3>Caffeine</h3>
            <p>0.8% - 1.5%</p>
            <h3>Flavour</h3>
            <p>Mild, Smooth, Fruity</p>
            <h3>Suitable</h3>
            <p>For Filter Coffee</p>
            <input type="checkbox" id='arabicaCheckBox' defaultChecked={getChecked('arabica')}/>
                <label htmlFor='arabicaCheckBox' onClick={() => {handleTypeClick('arabica')}}></label>
            </div>
        </span>
        <span className='robusta'
        style={{ opacity: getOpacity('robusta'), transition: '0.3s' }}>
            <svg width={'100px'} height={'100px'} viewBox='150 200 200 120' style={{ opacity: '0.9'}}>
            <Robusta/>
            </svg>
            <header>Robusta</header>
            <div className='robustaText'>
            <h3>Productivity</h3>
            <p>25% World Consumption</p>
            <h3>Origin</h3>
            <p>Kongo</p>
            <h3>Caffeine</h3>
            <p>1.7% - 3.5%</p>
            <h3>Flavour</h3>
            <p>Stronger, Full-bodied, Bitter</p>
            <h3>Suitable</h3>
            <p>For Espresso</p>
            <input type="checkbox" id='robustaCheckBox' defaultChecked={getChecked('robusta')}/>
                <label htmlFor="robustaCheckBox" onClick={() => handleTypeClick('robusta')}></label>
            </div>
        </span>
        {/* <span className='liberica'
        style={{ opacity: getOpacity('liberica'), transition: '0.3s' }}>
            <svg width={'100px'} height={'100px'} viewBox='150 200 200 120' style={{ opacity: '0.9'}}>
                <Liberica/>
            </svg>
            <header>Liberica</header>
            <div className='libericaText'>
            <h3>Productivity</h3>
            <p>3% World Consumption</p>
            <h3>Origin</h3>
            <p>Indonesia</p>
            <h3>Caffeine</h3>
            <p>1.2%</p>
            <h3>Flavour</h3>
            <p>Fruity, Floral, Smokey</p>
            <h3>Suitable</h3>
            <p>For Instant</p>
            <input type="checkbox" id='libericaCheckBox'checked={getChecked('liberica')}/>
                <label for="libericaCheckBox" onClick={() =>handleTypeClick('liberica')}></label>
            </div>
        </span>
        <span className='excelsa'
        style={{ opacity: getOpacity('excelsa'), transition: '0.3s' }}>
            <svg width={'100px'} height={'100px'} viewBox='150 200 200 120' style={{ opacity: '0.9'}}>
                <Excelsa/>
            </svg>
            <header>Excelsa</header>
            <div className='excelsaText'>
            <h3>Productivity</h3>
            <p>2% World Consumption</p>
            <h3>Origin</h3>
            <p>Southeast Asia</p>
            <h3>Caffeine</h3>
            <p>0.9% ~ 1.1%</p>
            <h3>Flavour</h3>
            <p>Dark and Rosy</p>
            <h3>Suitable</h3>
            <p>For Instant</p>
            <input type="checkbox" id='excelsaCheckBox'checked={getChecked('excelsa')}/>
                <label for="excelsaCheckBox" onClick={() => handleTypeClick('excelsa')}></label>
            </div>
        </span> */}
  </div>
  )
}
