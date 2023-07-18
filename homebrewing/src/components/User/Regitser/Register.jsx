import React, {useState} from 'react'
import './Regitser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// images and icons
import {ReactComponent as CoffeeWomen} from '../../../assets/coffeeWomen.svg'
import { BsGoogle,BsFacebook } from 'react-icons/bs'

export default function User() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate();

  const postUser = async () => {
    const serverUrl = 'http://localhost:8080/register'

    console.log(name)

    try {
      const response = await axios.post(serverUrl, {
        name : name,
        email : email
      })

      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

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