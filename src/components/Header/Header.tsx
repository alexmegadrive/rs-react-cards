import React from "react";
import "./header.scss";
import logo from "/logo.webp";
import NavigationLink from "../NavLink/NavLink";

interface IHeader {
  location?: "about" | "main" | undefined;
}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />

      <NavigationLink destination={"/"} text={"Main"} />
      <NavigationLink destination={"/about"} text={"About"} />
      <NavigationLink destination={"/contacts"} text={"Contacts"} />
      <NavigationLink destination={"/support"} text={"Support"} />
      <NavigationLink destination={"/employees"} text={"Employees"} />
      <NavigationLink destination={"/products"} text={"Products"} />
    </header>
  );
};

export default Header;
