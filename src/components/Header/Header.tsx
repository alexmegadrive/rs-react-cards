import React from "react";
import "./header.scss";
import logo from "/logo.webp";
import NavLink from "../NavLink/NavLink";

interface IHeader {
  location?: "about" | "main" | undefined;
}
export default class Header extends React.Component<IHeader> {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="logo" />

        <NavLink destination={"main"} />
        <NavLink destination={"about"} />
        <NavLink destination={"contacts"} />
        <NavLink destination={"support"} />
        <NavLink destination={"employees"} />
      </header>
    );
  }
}
