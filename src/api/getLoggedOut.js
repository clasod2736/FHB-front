import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export async function getLoggedOut(userEmail) {
  const serverUrl = `${heroku}/logOut`;
  console.log(userEmail);

  try {
    const response = await axios.get(serverUrl, {
      email: userEmail,
    });
    console.log(userEmail, "Logged Out");
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
