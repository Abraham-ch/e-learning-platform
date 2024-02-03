import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center py-3 px-16 justify-between text-white bg-black">
        <a href="/">Logo</a>
        <nav>
          <ul className="flex justify-around gap-x-16">
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/Cursos"}>Cursos</Link>
            </li>
            <li>
              <Link to={"/login"}>Log In</Link>
            </li>
            <li>
              <Link to={"/register"}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
