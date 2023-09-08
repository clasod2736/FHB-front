import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Context API
import { UserDataProvider } from './context';

//Old Redux codes
// import { Provider } from 'react-redux';
// import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
      <UserDataProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserDataProvider>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
