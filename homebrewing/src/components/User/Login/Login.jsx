import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import axios from 'axios';

//image
import {ReactComponent as Logo} from '../../../assets/login.svg'

export default function Login() {
    
    const [email, setEmail] = useState('')
    const [alertUser, setAlertUser] = useState (false)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    // Get api from database for userinformation.
    const getLogIn = async () => {
        const serverUrl = 'http://localhost:8080/login'
        console.log(email);
        try {
            const response = await axios.get(serverUrl, { 
                params: {
                    email: email
            },
        })

        console.log(response.data);
        console.log(response.data.name);

        if (email === response.data.email) {
            dispatch({ type: 'loginSuccess' })
            setAlertUser(false);

            // save user LoggedIn history in local storage
            localStorage.setItem('userInfo', JSON.stringify(
                {   userName : [response.data.name],
                    isLoggedIn : true
                }
            ))

            navigate(`/login/${response.data.name}`)
        } 
        else setAlertUser(true)
        } 
        catch (error) {
            console.log(error)
        }
    }
    
    // get alert if failed to get Login
    const settingAlertUser = () => {
        if (alertUser === true) {
            return (
                    <p>* Sorry, We don't have matched email.</p>
            )
        } else return
    }

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
                    <p>Please login your email first for the better experience.</p>
                    <p>and let's make Great Coffee today!</p>
                    <p className='notice'>* We don't register password for accounts, just put email please</p>
                </div>
                <div className='email'>
                    <p>Email</p>
                    <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className='submit'>
                    <div className='loginContainer'>
                        <div>
                            {settingAlertUser()}
                        </div>
                        <Link className='loginBtn' onClick={() => {getLogIn()}}>Log In</Link>
                    </div>
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
