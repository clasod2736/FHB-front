import React, {useState} from 'react'
import './Regitser.css'
import { Link, useNavigate } from 'react-router-dom'

import {ReactComponent as CoffeeWomen} from '../../../assets/coffeeWomen.svg'
import { BsGoogle,BsFacebook } from 'react-icons/bs'

export default function User() {
  const [name, setName] = useState('Are you...??')
  const [email, setEmail] = useState('')
  const [pref, setPref] = useState(0)

  const navigate = useNavigate();

  const handleName = (e) => {
    const text = e.target.value
    if (text.length === 0) {
      setName('Are you...??')
    } else if (text.length > 0) {
      setName(text)
    }
  }

  const submitRegist = () => {
    if (name === 'Are you...??') {
        alert('Please put your NAME!!')
        return
        } else { 
            navigate(`/${name}/menu`)
        }
  }
  const handlePreference = () => {
    setPref((prev) => prev + 1)
    if ( pref === 4) {
      setPref(4)
    }
    console.log(pref)
  }
  const settingPref = () => {
      if (pref === 0) {
        return(
          <div className='preferenceContainer'>
              <div className='title'>
                <h2>Wait! tell us your "Preferences"</h2>
                <p>* Your preferences are helps we can pick recommend mark for you</p>
                <p style={{marginLeft: '10px'}}>Otherwise you'll go without recommend mark, which is no problem!</p>
              </div>
              <div className='pfBtnContainer'>
                <button className='preferenceBtn' onClick={() => {handlePreference()}}>Start!</button>
            </div>
          </div>
        )
      } else if (pref === 1) {
        return (
          <div className='preferenceContainer'>
            <span className='preferences'>
                  <div className='coffee'>
                    <h1>What coffee kinds most you like?</h1>
                    <div className='coffeeCheck'>
                      <span className='black'>
                        <input type="checkbox" id='black'/>
                          <label htmlFor='black'></label>
                          <p>Black</p>
                      </span>
                      <span className='white'>
                        <input type="checkbox" id='white'/>
                          <label htmlFor='white'></label>
                          <p>White</p>
                      </span>
                      <span className='other'>
                        <input type="checkbox" id='other'/>
                          <label htmlFor='other'></label>
                          <p>Other</p>
                      </span>
                    </div>
                  </div>
                </span>
          </div>
        )
      }
  }

  return (
    <div className='registerContainer'>
         <div className='register'>
          <header>Register</header>
          <div className='contents'>
            <span>
              <svg width={'350px'} height={'400px'} viewBox='160 195 190 120'>
                <CoffeeWomen/>
              </svg>
            </span>
            <div className='form'>
              <span className='getRegist'>
                <button className='google'><BsGoogle className='googleLogo'/>Google</button>
                <button className='facebook'><BsFacebook className='fbLogo'/>Facebook</button>
              </span>
              <div className='divide'>
                <p>Or continue with Email</p>
              </div>
              <div className='name'>
                <input type="text" placeholder='Your Name'
                onChange={handleName}
                onSubmit={() => {
                    if (name === 0) {
                    alert('Please put your NAME!!')
                    }
                }}/>
              </div>
              <div className='email'>
                <input type="text" placeholder='Your Email'/>
              </div>
              <div className='emailConfirm'>
                <input type="text" placeholder='Email confirm'/>
              </div>
              <Link className='submitRegist'>
                <button type='submit' onClick={submitRegist}>Create</button>
              </Link>
              <div className='login'>
                <p>Already have an account?</p>
                <Link className='loginBtn' to={'/login'}>Login</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}