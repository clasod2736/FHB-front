import React, {useEffect} from 'react'
import './App.css'
import Root from './pages/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { updateEmail } from './store/action';

//Components
import Intro from './components/Intro/Intro';
import Methods from './components/Methods/Methods';
import Menu from './components/Menu/Menu';
import Recipe from './components/Recipe/Recipe';
import Login from './components/User/Login/Login';
import Register from './components/User/Regitser/Register'; 
import Finish from './components/Finish/Finish';
import MyRecipe from './components/MyRecipe/MyRecipe';
import Brewing from './components/Brewing/Brewing';

const router = createBrowserRouter([
  { path:'/',
    element: <Root/>,
    errorElement: <p>Not Found 404!!</p>,
    children: [
      {index: true, element: <Intro/>},
      {path: '/login', element:<Login/>},
      {path: '/register', element:<Register/>},
      {path: '/myRecipe', element:<MyRecipe/>},
      {path: '/menu', element:<Menu/>},
      {path: '/menu/:menuName/method', element:<Methods/>},
      {path: '/menu/:menuName/method/:methodName/recipe', element:<Recipe/>},
      {path: '/menu/:menuName/method/:methodName/recipe/brewing/:water/:coffee/:roasting/:grind/brewing', element:<Brewing/>},
      {path: '/menu/:menuName/method/:methodName/recipe/brewing/:water/:coffee/:roasting/:grind/brewing/finish', element:<Finish/>},
    ]}
]);


export default function App() {

  const dispatch = useDispatch();

  //check Local data exist and update redux store for when react-app refresh
  useEffect(() => {
    const localInfo =  localStorage.getItem('userInfo')
    const userInfo = JSON.parse(localInfo);

    if (userInfo) {

      if (userInfo.isLoggedIn === true) {

        const userInfo = JSON.parse(localInfo);
        const isLoggedIn = userInfo.isLoggedIn;
        const userEmail = userInfo.userEmail;
        console.log(userEmail, isLoggedIn)
  
        dispatch(updateEmail(userEmail))
        dispatch({ type: 'loginSuccess' })

      } else if (userInfo.isLoggedIn === false) {
        return
      }
    } else {
      console.log('Cannot get Data from Local Storage')
    }

  })

  return (
    <div className='appContainer'>
      <RouterProvider router={router}/>
    </div>
  )
}

