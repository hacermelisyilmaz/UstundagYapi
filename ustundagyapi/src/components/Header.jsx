import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Üstündağ Yapı" className="logo" />

      <div className="header-right">
        <Navigation />

        <Link to="/iletisim">
          <button className="form-btn">Talep Formu</button>
        </Link>
      </div>
    </header>
  );
}
