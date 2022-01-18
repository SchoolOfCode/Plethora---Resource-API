import React from "react";
import logo from "../../image/logo.png";
import NavBar from "../Navbar";

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <NavBar />
    </header>
  );
}
