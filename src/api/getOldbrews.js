import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export async function getOldbrews(userEmail) {
  const serverUrl = `${heroku}/getOldbrews`;

  try {
    const response = await axios.get(serverUrl, {
      params: {
        email: userEmail,
      },
    });
    console.log("Old Brews loaded");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
