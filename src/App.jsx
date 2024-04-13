import React, { useEffect } from "react";
import "./App.css";
import Root from "./Root/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Redux
import { useDispatch } from "react-redux";
import { updateEmail } from "./store/action";
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
import { getAuth } from "./api/getAuth";

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

  //use JWT Token for authentication and keep user logIn
  useEffect(() => {
    const Auth = async () => {
      const response = await getAuth();

      if (response.status === 404) {
        console.log("User need to logIn");
        dispatch({ type: "loggedOut" });
        return;
      } else if (response) {
        console.log(`User ${response.data.userEmail} approved authentication`);
        dispatch(updateEmail(response.data.userEmail));
        dispatch({ type: "loginSuccess" });

        if (response.data.newAccessToken) {
          localStorage.setItem("accessToken", response.data.newAccessToken);
          console.log("New access token generated");
        }
      }
    };
    Auth();
  }, [dispatch]);

  return (
    <div className="appContainer">
      <RouterProvider router={router} />
    </div>
  );
}
