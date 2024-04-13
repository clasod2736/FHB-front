import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export async function getRecentbrews(userEmail) {
  const serverUrl = `${heroku}/getRecentbrew`;

  try {
    const response = await axios.get(serverUrl, {
      params: {
        email: userEmail,
      },
    });
    console.log("Recent Brew loaded.");
    console.log(response, response.data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
