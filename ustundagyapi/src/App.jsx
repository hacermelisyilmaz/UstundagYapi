import { useState } from "react";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero-section">
        <Header />
        <HeaderContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
