import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import NoPage from "./pages/NoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Cursos/curso1" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
