import React from 'react'
import './Login.css'

import {ReactComponent as Logo} from '../../../assets/login.svg'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div className='LoginContainer'>
        <header>Log In</header>
        <div className='login'>
            <div className='logo'>
                <svg width={'300px'} height={'400px'} viewBox='170 190 150 120'>
                    <Logo/>
                </svg>
            </div>
            <div className='form'>
                <div className='formGuide'>
                    <h1>Welcome!</h1>
                    <p>Please log in with your email</p>
                    <p>and let's make Great Coffee today!</p>
                    <p className='notice'>* We don't register password for accounts, just put email please</p>
                </div>
                <div className='email'>
                    <p>Email</p>
                    <input type="text"/>
                </div>
                <div className='submit'>
                    <Link className='loginBtn' to={'/'}>Log In</Link>
                    <div className='register'>
                        <p>Or...you didn't register yet?</p>
                        <Link className='registerBtn' to={'/register'}>Join FHB</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
