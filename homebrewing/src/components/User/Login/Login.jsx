import React, {useState, useEffect} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

//image
import {ReactComponent as Logo} from '../../../assets/login.svg'

export default function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shownPassword, setShownPassword] = useState(false)
    const [alertUser, setAlertUser] = useState (false)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    // Get api from database for userinformation.
    const getLogIn = async () => {
        const serverUrl = 'http://localhost:8080/login'
        try {
            const response = await axios.get(serverUrl, { 
                params: {
                    email: email,
                    password: password
            },
        })

        console.log(response.data);
        console.log(response.data._id);

        if (response) {
            dispatch({ type: 'loginSuccess' })
            setAlertUser(false);

            // save user LoggedIn history in local storage
            localStorage.setItem('userInfo', JSON.stringify(
                {   userName : [response.data.name],
                    isLoggedIn : true
                }
            ))

            navigate(`/`)
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
                    <p>* Sorry, We don't have matched user.</p>
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
                </div>
                <div className='email'>
                    <p>Email</p>
                    <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className='password'>
                    <p>Password</p>
                    <input type={shownPassword ? 'text' : 'password'} onChange={(e) => {setPassword(e.target.value)}} endado/>
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
