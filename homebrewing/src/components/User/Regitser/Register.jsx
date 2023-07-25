import React, {useState} from 'react'
import './Regitser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useDispatch } from 'react-redux'

// images and icons
import {ReactComponent as CoffeeWomen} from '../../../assets/coffeeWomen.svg'
import { BsGoogle,BsFacebook } from 'react-icons/bs'

export default function User() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [caution, setCaution] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //post user data in mongoDB
  const postUser = async () => {
    const serverUrl = 'http://localhost:8080/register'

    try {
      const response = await axios.post(serverUrl, {
        name : name,
        email : email,
        currentBrews : {
          menuName: '',
          methodName: '',
          serve: 0,
          coffee: 0,
          roasting: '',
          grind: ''
        },
        oldBrews : [],
        favourites: []
      })

      console.log(response.data)
      navigate(`/login/${name}`)
    } catch (error) {
      console.log(error)
      setCaution('emailExist')
    }
  }

  //check user input and post user data to redux and local
  const submitRegist = () => {
    if (name.length <= 0) {
          setCaution('name')
          console.log(caution)
        }
        else if (name === isNaN) {
          setCaution('nameNum')
          console.log('nameNum')
        }
        else if (email.length <= 0) {
          setCaution('email')
        }
        else if (!email.includes('@')) {
          setCaution('emailForm')
        }
        else if (email !== confirmEmail) {
          setCaution('confirmEmail')
        } 
        else { 
            //request for making user data in database to back end
            postUser()

            //make data in redux store
            dispatch({ type: 'loginSuccess' })

            //make data in local storage
            localStorage.setItem('userInfo', JSON.stringify(
              {   userName : [name],
                  isLoggedIn : true
              }
          ))
        }
      }

  //setting caution function.
  const settingCaution = () => {
    if (caution === 'name') {
      return (
        <p>***Plase put your Name.</p>
      )
    } else if (caution === 'nameNum') {
      return (
        <p>***Plase put letter for Name.</p>
      )
    } else if (caution === 'email') {
      return (
        <p>***Please put your email.</p>
      )
    } else if (caution === 'emailForm') {
      return (
        <p>***Please put proper form of email address.</p>
      )
    } else if (caution === 'emailExist') {
      return (
        <p>***This Email address already registerd.</p>
      )
    } else if (caution === 'confirmEmail') {
      return (
        <p>***Email cannot be confirmed.</p>
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
                onChange={(e) => {setName(e.target.value)}}/>
              </div>
              <div className='email'>
                <input type="text" placeholder='Your Email' onChange={(e) => {setEmail(e.target.value)}}/>
              </div>
              <div className='emailConfirm'>
                <input type="text" placeholder='Email confirm' onChange={(e) => {setConfirmEmail(e.target.value)}}/>
              </div>
              <Link className='submitRegist'>
                <button type='submit' onClick={submitRegist}>Create</button>
              </Link>
              <div className='caution'>
                {settingCaution()}
              </div>
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