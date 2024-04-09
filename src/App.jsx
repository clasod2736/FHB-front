import React, { useEffect } from "react";
import "./App.css";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { updateEmail } from "./store/action";
import axios from "axios";
import { useSelector } from "react-redux";

//Components
import {
  Intro,
  Methods,
  Menu,
  Recipe,
  Login,
  Register,
  Finish,
  MyRecipe,
  Brewing,
} from "./components";

const heroku = process.env.REACT_APP_HEROKU_URL;

export default function App() {
  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.logIn);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <p>Not Found 404!!</p>,
      children: [
        { index: true, element: <Intro /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/myRecipe", element: isLogIn ? <MyRecipe /> : <Intro /> },
        { path: "/menu", element: isLogIn ? <Menu /> : <Intro /> },
        { path: "/menu/:menuName/method", element: isLogIn ? <Methods /> : <Intro /> },
        {
          path: "/menu/:menuName/method/:methodName/recipe",
          element: isLogIn ? <Recipe /> : <Intro />,
        },
        {
          path: "/menu/:menuName/method/:methodName/recipe/:water/:coffee/:roasting/:grind/brewing",
          element: isLogIn ? <Brewing /> : <Intro />,
        },
        {
          path: "/menu/:menuName/method/:methodName/recipe/:water/:coffee/:roasting/:grind/brewing/finish",
          element: isLogIn ? <Finish /> : <Intro />,
        },
      ],
    },
  ]);

  /* check Local data exist and update redux store for when react-app refresh */
  // useEffect(() => {
  //   const localInfo =  localStorage.getItem('userInfo')
  //   const userInfo = JSON.parse(localInfo);

  //   if (userInfo) {

  //     if (userInfo.isLoggedIn) {

  //       const userInfo = JSON.parse(localInfo);
  //       const isLoggedIn = userInfo.isLoggedIn;
  //       const userEmail = userInfo.userEmail;
  //       console.log(userEmail, isLoggedIn)

  //       dispatch(updateEmail(userEmail))
  //       dispatch({ type: 'loginSuccess' })

  //     } else if (!userInfo.isLoggedIn) {
  //       return
  //     }
  //   } else {
  //     console.log('Cannot get Data from Local Storage')
  //   }
  // })

  //use JWT Token for authentication and keep user logIn
  useEffect(() => {
    const getCookies = async () => {
      try {
        const response = await axios.get(`${heroku}/isAuth`, { withCredentials: true });

        if (response.data.email !== undefined) {
          console.log(response.data.email);
          dispatch(updateEmail(response.data.email));
          dispatch({ type: "loginSuccess" });
          console.log("token approved");
          console.log(response);
        } else {
          dispatch({ type: "loggedOut" });
          console.log("token rejected...");
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
        console.log("User need to logIn");
      }
    };
    getCookies();
  }, [dispatch]);

  return (
    <div className="appContainer">
      <RouterProvider router={router} />
    </div>
  );
}
