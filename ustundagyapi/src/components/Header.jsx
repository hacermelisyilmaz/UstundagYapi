import React from "react";
// import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">logo</div>

      <div className="header-right">
        <nav className="nav">
          <a href="#home">Ana Sayfa</a>
          <a href="#projects">Projeler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
        </nav>

        <div className="form-btn">
          <a href="#form">Talep Formu</a>
        </div>
      </div>
    </header>
  );
}
