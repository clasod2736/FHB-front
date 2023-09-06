import React, {useState} from 'react'
import './Regitser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// images and icons
import {ReactComponent as CoffeeWomen} from '../../../assets/coffeeWomen.svg'
import { BsGoogle } from 'react-icons/bs'

export default function User() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [caution, setCaution] = useState('');

  const navigate = useNavigate();

  //post user data in mongoDB
  const postUser = async () => {
    const serverUrl = 'http://localhost:8080/register'

    try {
      const response = await axios.post(serverUrl, {
        email : email,
        password : password,
        oldBrews : [],
        favourites: []
      })

      console.log(response.data)
      alert("User  " + email + "  Registered!!")
      navigate(`/login`)
    } catch (error) {

      console.log(error)
      setCaution('emailExist')
      return
    }
  }

  //check user input and post user data to redux and local
  const submitRegist = () => {
    if (email.length <= 0) {
          setCaution('email')
          console.log(caution)
        }
        else if (!email.includes('@')) {
          setCaution('emailForm')
        }
        else if (password.length <= 0) {
          setCaution('password')
        }
        else if (password !== confirmPassword) {
          setCaution('confirmPassword')
        } 
        else { 
            //make data in local storage
            // localStorage.setItem('userInfo', JSON.stringify(
            //   {   
            //     userEmail : email,
            //     isLoggedIn : false
            //   }
            // ))

            //request for making user data in database to back end
            postUser()
          }
        }

  //setting caution function.
  const settingCaution = () => {
    if (caution === 'email') {
      return (
        <p>***Plase put your email.</p>
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
    } else if (caution === 'password') {
      return (
        <p>***Please Put password properly.</p>
      )
    } else if (caution === 'confirmPassword') {
      return (
        <p>***Password cannot be confirmed.</p>
      )
    }
  }

  return (
    <div className='registerContainer'>
         <div className='register'>
          <header>Register</header>
          <div className='contents'>
            <span>
              <svg width={'350px'} height={'400px'} viewBox='160 195 190 120' className='registerImg'>
                <CoffeeWomen/>
              </svg>
            </span>
            <div className='form'>
              <span className='getRegist'>
                <button className='google'><BsGoogle className='googleLogo'/>Google</button>
              </span>
              <div className='divide'>
                <p>Or continue with Email</p>
              </div>
              <div className='email'>
                <input type="text" placeholder='Email'
                onChange={(e) => {setEmail(e.target.value)}}/>
              </div>
              <div className='password'>
                <input type="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
              </div>
              <div className='passwordConfirm'>
                <input type="password" placeholder='Password Confirm' onChange={(e) => {setConfirmPassword(e.target.value)}}/>
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