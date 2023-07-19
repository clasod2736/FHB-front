import React from 'react'
import './App.css'
import Root from './pages/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Intro from './components/Intro/Intro';
import Methods from './components/Methods/Methods';
import Menu from './components/Menu/Menu';
import Recipe from './components/Recipe/Recipe';
import Login from './components/User/Login/Login';
import Register from './components/User/Regitser/Register';
import Brewing from './components/Brewing/Brewing';

// Brewing Steps Components
import Step1 from './components/Brewing//Steps/Step1/Step1';
import Step3 from './components/Brewing/Steps/Step3/Step3';
import Step2 from './components/Brewing/Steps/Step2/Step2';
import Step4 from './components/Brewing/Steps/Step4/Step4';
import Step5 from './components/Brewing/Steps/Step5/Step5';
import Step6 from './components/Brewing/Steps/Step6/Step6';
import Step7 from './components/Brewing/Steps/Step7/Step7';
import Finish from './components/Finish/Finish';

const router = createBrowserRouter([
  { path:'/',
    element: <Root/>,
    errorElement: <p>Not Found 404!!</p>,
    children: [
      {index: true, element: <Intro/>},
      {path: '/login', element:<Login/>},
      {path: '/login/:userName', element:<Intro/>},
      {path: '/register', element:<Register/>},
      {path: '/:username', element:<Intro/>},
      {path: '/:userName/menu', element:<Menu/>},
      {path: '/:userName/menu/:menuName/method', element:<Methods/>},
      {path: '/:userName/menu/:menuName/method/mokapot', element:<Methods/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe', element:<Recipe/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing', element:<Brewing/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/finish', element:<Finish/>},
      
      //Brewing Steps
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step1', element:<Step1/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step2', element:<Step2/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step3', element:<Step3/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step4', element:<Step4/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step5', element:<Step5/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step6', element:<Step6/>},
      {path: '/:userName/menu/:menuName/method/:methodName/recipe/brewing/:serve/:roasting/:grind/step7', element:<Step7/>},
    ]}
]);
export default function App() {
  return (
    <div className='appContainer'>
      <RouterProvider router={router}/>
    </div>
  )
}

