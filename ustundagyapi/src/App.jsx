import { useState } from "react";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero-section">
        <Header />
      </div>
    </>
  );
}

export default App;
