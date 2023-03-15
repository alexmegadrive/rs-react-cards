import React from "react";
import "./header.scss";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

interface IHeader {
  location: "about" | "main";
}
export default class Header extends React.Component<IHeader> {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        {this.props.location === "about" ? (
          <NavLink destination={"main"} />
        ) : (
          <NavLink destination={"about"} />
        )}
        <NavLink destination={"contacts"} />
      </header>
    );
  }
}
