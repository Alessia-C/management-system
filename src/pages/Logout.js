import { redirect } from "react-router-dom";

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expiration");
  return redirect("/login");
}