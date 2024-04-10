import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export const handleLogIn = async (email, password) => {
  const serverUrl = `${heroku}/login`;

  try {
    const response = await axios.post(
      serverUrl,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );

    console.log(`${response.data.email} Logged in.`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
