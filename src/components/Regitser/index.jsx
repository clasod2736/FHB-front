import React, { useState } from "react";
import "./Regitser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

// images and icons
import { CoffeeWomen } from "../../assets";

export default function Register() {
  const isLogIn = useSelector((state) => state.logIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [caution, setCaution] = useState("");

  const navigate = useNavigate();

  const heroku = process.env.REACT_APP_HEROKU_URL;

  //post user data in mongoDB
  const postUser = async () => {
    const serverUrl = `${heroku}/register`;

    if (isLogIn) {
      alert("You Already Logged In.");
      navigate("/");
    } else
      try {
        const response = await axios.post(serverUrl, {
          email: email,
          password: password,
          oldBrews: [],
          favourites: [],
        });

        console.log(response.data);
        alert("User  " + email + "  Registered!!");
        navigate(-2);
      } catch (error) {
        console.log(error);
        setCaution("emailExist");
        return;
      }
  };

  //check user input and post user data to redux and local
  const submitRegist = () => {
    if (email.length <= 0) {
      setCaution("email");
      console.log(caution);
    } else if (!email.includes("@")) {
      setCaution("emailForm");
    } else if (password.length <= 0) {
      setCaution("password");
    } else if (password !== confirmPassword) {
      setCaution("confirmPassword");
    } else {
      //make data in local storage
      // localStorage.setItem('userInfo', JSON.stringify(
      //   {
      //     userEmail : email,
      //     isLoggedIn : false
      //   }
      // ))

      //request for making user data in database to back end
      postUser();
    }
  };

  //setting caution function.
  const settingCaution = () => {
    if (caution === "email") {
      return <p>***Plase put your email.</p>;
    } else if (caution === "email") {
      return <p>***Please put your email.</p>;
    } else if (caution === "emailForm") {
      return <p>***Please put proper form of email address.</p>;
    } else if (caution === "emailExist") {
      return <p>***This Email address already registerd.</p>;
    } else if (caution === "password") {
      return <p>***Please Put password properly.</p>;
    } else if (caution === "confirmPassword") {
      return <p>***Password cannot be confirmed.</p>;
    }
  };

  return (
    <div className="registerContainer">
      <div className="register">
        <header>Register</header>
        <div className="contents">
          <span>
            <svg width={"350px"} height={"400px"} viewBox="160 195 190 120" className="registerImg">
              <CoffeeWomen />
            </svg>
          </span>
          <div className="form">
            <div className="divide">
              <p>Create Your Own Coffee Journey!</p>
            </div>
            <div className="email">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="passwordConfirm">
              <input
                type="password"
                placeholder="Password Confirm"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <Link className="submitRegist">
              <button type="submit" onClick={submitRegist}>
                Create
              </button>
            </Link>
            <div className="caution">{settingCaution()}</div>
            <div className="login">
              <p>Already have an account?</p>
              <Link className="loginBtn" to={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
