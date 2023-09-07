import { createStore } from "redux";

function reducer(
  state = {
    userEmail: "",
    logIn: false,
  },
  action
) {
  const newState = { ...state };
  if (action.type === "loginSuccess") {
    newState.logIn = true;
  } else if (action.type === "loggedOut") {
    newState.logIn = false;
  } else if (action.type === "userEmail") {
    newState.userEmail = action.payload;
  }

  return newState;
}

const store = createStore(reducer);

export default store;
