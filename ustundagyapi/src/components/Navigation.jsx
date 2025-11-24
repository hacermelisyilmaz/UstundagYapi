import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" reloadDocument>
        <div>Ana Sayfa</div>
      </Link>

      <Link to="/projeler">
        <div>Projeler</div>
      </Link>

      <Link to="/hakkimizda">
        <div>Hakkımızda</div>
      </Link>

      <Link to="/iletisim">
        <div>İletişim</div>
      </Link>
    </nav>
  );
}
