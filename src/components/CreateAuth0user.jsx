import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CreateAuth0user() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated)
    return axios.post("http://localhost:8000/users/register/", {
      username: `${user.name}`,
      email: `${user.email}`,
      password: `${user.password}`,
      password2: `${user.password}`,
    });
}
