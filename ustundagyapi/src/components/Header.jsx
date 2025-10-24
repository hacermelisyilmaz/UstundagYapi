import React from "react";
// import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">here's logo</div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
