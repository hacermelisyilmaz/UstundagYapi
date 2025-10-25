import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
// import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">logo</div>

      <div className="header-right">
        <Navigation />

        <Link to="/form">
          <button className="form-btn">Talep Formu</button>
        </Link>
      </div>
    </header>
  );
}
