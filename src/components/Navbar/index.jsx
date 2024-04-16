import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from "../../store/action";

import { getLoggedOut } from "../../api/getLoggedOut";

//Slide Menu component (react-bootstrap)
import SlideMenu from "./SlideMenu";
import Choices from "./Choices";

export default function Navbar() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
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

  const logOut = async () => {
    try {
      await getLoggedOut(userEmail);

      dispatch(updateEmail(""));
      dispatch({ type: "loggedOut" });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
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
          onClick={async () => {
            await logOut();
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
