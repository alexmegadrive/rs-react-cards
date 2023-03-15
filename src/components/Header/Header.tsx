import React from "react";
import "./header.scss";
import logo from "../../assets/logo.webp";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>
    );
  }
}
