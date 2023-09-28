import axios from "axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

const heroku = `${PROXY}${process.env.REACT_APP_HEROKU_URL}`;

export async function getOldbrews(isLogIn, userEmail) {
  const serverUrl = `${heroku}/getOldbrews`;

  if (isLogIn) {
    try {
      const response = await axios.get(serverUrl, {
        params: {
          email: userEmail,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else return null;
}
