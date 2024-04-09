import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export async function getRecentbrews(isLogIn, userEmail) {
  const serverUrl = `${heroku}/getRecentbrew`;

  if (isLogIn) {
    try {
      const response = await axios.get(serverUrl, {
        params: {
          email: userEmail,
        },
      });
      console.log("Recent Brew loaded.");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else return null;
}
