import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
