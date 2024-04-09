import axios from "axios";

import getTime from "../util/getTime";

const heroku = process.env.REACT_APP_HEROKU_URL;

export default async function saveFavourites(userEmail, brew) {
  const postFvUrl = `${heroku}/saveFavourites`;

  //use current time for organising brews
  const time = getTime();

  //post favourites with currentBrews data
  try {
    const response = await axios.post(postFvUrl, {
      email: userEmail,
      favourites: [
        {
          favName: brew.order,
          order: time.order,
          date: time.fullDate,
          menuName: brew.menuName,
          methodName: brew.methodName,
          water: brew.water,
          coffee: brew.coffee,
          roasting: brew.roasting,
          grind: brew.grind,
          description: "",
        },
      ],
    });

    console.log("Fav Saved.");
    return JSON.stringify(response.status);
  } catch (error) {
    console.log(error);
    return;
  }
}
