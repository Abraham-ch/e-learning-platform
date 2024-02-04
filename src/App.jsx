import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import NoPage from "./pages/NoPage";
import Curso1 from "./pages/Curso1";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <h1 className="font-bold text-5xl">Loading...</h1>
      </div>
    );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Cursos/curso1" element={<Curso1 />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
