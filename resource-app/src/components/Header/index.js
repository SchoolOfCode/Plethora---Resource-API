import React from "react";
import './Header.css'
import logo from "../../image/logo.png";
import NavBar from "../Navbar";

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo"/>
      <NavBar />
    </header>
  );
}
