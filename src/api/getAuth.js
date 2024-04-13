import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export const getAuth = async () => {
  try {
    const response = await axios.get(`${heroku}/isAuth`, { withCredentials: true });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log("User need to logIn");
    return error;
  }
};
