import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../store/action";
import { useSelector } from "react-redux";

//image
import { Logo } from "../../assets";
import { handleLogIn, getAlertLogIn } from "../../api/handleLogIn";

export default function Login() {
  const isLogIn = useSelector((state) => state.logIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertUser, setAlertUser] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Get api from database for userinformation.
  const getLogIn = async () => {
    const response = handleLogIn(email, password);

    if (password.length <= 1) {
      setAlertUser("password");
      return;
    } else if (isLogIn) {
      alert("You Logged In Already.");
      navigate(-2);
      return;
    }

    if (response) {
      dispatch({ type: "loginSuccess" });
      dispatch(updateEmail(email));
      setAlertUser(false);

      // save user LoggedIn history in local storage
      // localStorage.setItem('userInfo', JSON.stringify(
      //     {   userEmail : response.data.email,
      //         isLoggedIn : true
      //     }
      // ))
      navigate(`/`);
    }
  };

  return (
    <div className="LoginContainer">
      <header>Log In</header>
      <div className="login">
        <div className="logo">
          <svg width={"300px"} height={"400px"} viewBox="170 190 150 120">
            <Logo />
          </svg>
        </div>
        <div className="form">
          <div className="formGuide">
            <h1>Welcome!</h1>
            <p>
              Hello explorer, login with "<u>test@</u>" for both ID and password.
            </p>
            <p>
              Or make your own ID with "<u>Join FHB</u>" at the bottom of the form.
            </p>
          </div>
          <div className="email">
            <p>Email</p>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="submit">
            <div className="loginContainer">
              <div>{getAlertLogIn(alertUser)}</div>
              <button
                className="loginBtn"
                onClick={() => {
                  getLogIn();
                }}
              >
                Log In
              </button>
            </div>
            <div className="register">
              <p>Or...you didn't register yet?</p>
              <Link className="registerBtn" to={"/register"}>
                Join FHB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
