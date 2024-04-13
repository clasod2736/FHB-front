import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export const getAuth = async () => {
  try {
    const response = await axios.get(`${heroku}/isAuth`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

// const getAuth = async () => {
//   try {
//     const response = await axios.get(`${heroku}/isAuth`, { withCredentials: true });
//     console.log(response);

//     if (response) {
//       console.log(`User ${response.data.userEmail} approved authentication`);
//       dispatch(updateEmail(response.data.userEmail));
//       dispatch({ type: "loginSuccess" });

//       if (response.data.newAccessToken) {
//         localStorage.setItem("accessToken", response.data.newAccessToken);
//         console.log("New access token generated");
//       }
//     } else {
//       dispatch({ type: "loggedOut" });
//       console.log("token rejected...");
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("User need to logIn");
//   }
// };
