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

    console.log(`${response.data.userInfo.email} Logged in.`);

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

// get alert if failed to get Login
export const getAlertLogIn = (alertUser) => {
  if (alertUser === "unmatched") {
    return <p>* Sorry, We don't have matched user.</p>;
  } else if (alertUser === "email") {
    return <p>* Please include '@' to form of Email.</p>;
  } else if (alertUser === "password") {
    return <p>* Please put Password more than 1 letter.</p>;
  }
};
