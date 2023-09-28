import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from "../../store/action";

//Slide Menu component (react-bootstrap)
import SlideMenu from "./SlideMenu";
import Choices from "./Choices";
import axios from "axios";

export default function Navbar() {
  const isLogIn = useSelector((state) => state.logIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  //render differrent Link element depends on LoggedIn
  const settingMyRecipe = () => {
    if (!isLogIn) {
      return (
        <Link className="myRecipe" to={"/login"}>
          My Recipe
        </Link>
      );
    } else if (isLogIn) {
      return (
        <Link className="myRecipe" to={`/myRecipe`}>
          My Recipe
        </Link>
      );
    }
  };

  //update logIn information to local strogae, redux store
  const logOut = async () => {
    // const localInfo = localStorage.getItem('userInfo');
    //     const userInfo = JSON.parse(localInfo);
    //     userInfo.userEmail = '';
    //     userInfo.isLoggedIn = false;
    //     localStorage.setItem('userInfo', JSON.stringify(userInfo));

    //   }
    try {
      const response = await axios.get("http://localhost:8080/logOut", { withCredentials: true });
      console.log(response);
      dispatch(updateEmail(""));
      dispatch({ type: "loggedOut" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixedNavbar">
      <div className="about">
        <SlideMenu />
      </div>
      <div
        className="shop"
        onClick={() => {
          isLogIn ? <Choices /> : navigate("/login");
          setClick((prev) => !prev);
        }}
      >
        {isLogIn ? <Choices click={click} /> : "Choices"}
      </div>
      <Link className="navTitle" to={"/"}>
        For Homey Barista
      </Link>

      {settingMyRecipe()}

      {isLogIn ? (
        <Link
          className="logOut"
          to={"/"}
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </Link>
      ) : (
        <Link className="logIn" to={"./login"}>
          Log In
        </Link>
      )}
    </div>
  );
}
