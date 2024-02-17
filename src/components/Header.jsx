import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loginbutton from "./Loginbutton";
import Logoutbutton from "./Logoutbutton";
import Singupbutton from "./Singupbutton";
import Profile from "./Profile";

export default function Header() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <header className="flex items-center py-3 px-16 justify-between text-white bg-black">
        <a href="/">Logo</a>
        <nav className="flex justify-between">
          <ul className="flex justify-start gap-x-8 h-8 items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Cursos"}>Cursos</Link>
            </li>
            <li>
              <Link to={"/Dashboard"}>Dashboard</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Profile />
              </li>
            ) : null}
            <li>{isAuthenticated ? <Logoutbutton /> : <Loginbutton />}</li>
            {isAuthenticated ? null : (
              <li>
                <Singupbutton />
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
