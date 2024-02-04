import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loginbutton from "./Loginbutton";
import Logoutbutton from "./Logoutbutton";
import Singupbutton from "./Singupbutton";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <header className="flex items-center py-3 px-16 justify-between text-white bg-black">
        <a href="/">Logo</a>
        <nav>
          <ul className="flex justify-around gap-x-16">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Cursos"}>Cursos</Link>
            </li>
            <li>{isAuthenticated ? <Logoutbutton /> : <Loginbutton />}</li>
            <li>{isAuthenticated ? <div></div> : <Singupbutton />}</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
