import React from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  destination: string;
}
export default class NavigationLink extends React.Component<ILink> {
  render() {
    switch (this.props.destination) {
      case "about":
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? "header__link active" : "header__link"
            }
            to={"/about"}
          >
            About
          </NavLink>
        );

      case "main":
        return (
          <NavLink className="header__link" to={"/"}>
            Main
          </NavLink>
        );
      case "contacts":
        return (
          <NavLink className="header__link" to={"/contacts"}>
            Contacts
          </NavLink>
        );
      case "support":
        return (
          <NavLink className="header__link" to={"/support"}>
            Support
          </NavLink>
        );
      case "employees":
        return (
          <NavLink className="header__link" to={"/employees"}>
            Employees
          </NavLink>
        );
      default:
        break;
    }
  }
}
