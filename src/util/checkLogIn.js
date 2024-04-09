import { redirect } from "react-router-dom";

export default function checkLogIn(isLogIn) {
  if (!isLogIn) {
    return redirect("/");
  }
}
