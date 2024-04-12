import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store/store";

//intercept every axios request and add header section for JWT
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://main--voluble-kashata-776f36.netlify.app/",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Refresh-Token",
    "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      return config;
    }

    if (accessToken) {
      config.headers.accessToken = accessToken;
    }

    if (refreshToken) {
      config.headers.refreshToken = refreshToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
