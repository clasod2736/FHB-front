import axios from "axios";

const heroku = process.env.REACT_APP_HEROKU_URL;

export default function handleHistory(
  userEmail,
  oldBrews,
  changeHistory,
  setFavResponse,
  setFavUpdated,
  favUpdated,
  favResponse
) {
  if (oldBrews.length > 0) {
    const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
    const displayBrews = changeHistory ? sortedBrews.slice(5, 10) : sortedBrews.slice(0, 5);

    return (
      <ul className="history">
        {displayBrews.map((brew, index) => (
          <li key={index}>
            <p className="menu">{brew.menuName}</p>
            <p className="method">{brew.methodName}</p>
            <p className="coffee">{brew.coffee}g</p>
            <p className="water">{brew.water}</p>
            <p className="roasting">{brew.roasting}</p>
            <p className="grind">{brew.grind}</p>
            <div className="historyBtnContainer">
              <a
                href={`/menu/${brew.menuName}/method/${brew.methodName}/recipe/${brew.water}/${brew.coffee}/${brew.roasting}/${brew.grind}/brewing`}
              >
                Go Brew
              </a>
              <button
                onClick={async () => {
                  const postFvUrl = `${heroku}/saveFavourites`;

                  //use current time for organising brews
                  const order = Date.now();
                  const date = new Date();
                  const year = date.getFullYear().toString();
                  const month = (date.getMonth() + 1).toString();
                  const day = date.getDate().toString();
                  const hour = date.getHours().toString();
                  const minute = date.getMinutes().toString();
                  const fullDate = hour + ":" + minute + " / " + day + "." + month + "." + year;

                  //post favourites with currentBrews data
                  try {
                    const response = await axios.post(postFvUrl, {
                      email: userEmail,
                      favourites: [
                        {
                          favName: brew.order,
                          order: order,
                          date: fullDate,
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

                    console.log(response);
                    setFavResponse(JSON.stringify(response.status));
                    setFavUpdated(!favUpdated);
                  } catch (error) {
                    console.log(error);
                    const errMessage = error.response.status;
                    setFavResponse(JSON.stringify(errMessage));
                    console.log(favResponse);
                    return;
                  }
                }}
              >
                Save Fav
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  } else if (oldBrews.length === 0) {
    return (
      <div className="noHistory">
        <p>Wait! You don't have any history yet.</p>
      </div>
    );
  }
}
