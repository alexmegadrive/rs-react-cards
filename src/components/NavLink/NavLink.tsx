import React from "react";
import { Link } from "react-router-dom";

interface ILink {
  destination: "about" | "main" | "contacts" | "support";
}
export default class NavLink extends React.Component<ILink> {
  render() {
    switch (this.props.destination) {
      case "about":
        return (
          <Link className="header__link" to={"/about"}>
            About
          </Link>
        );

      case "main":
        return (
          <Link className="header__link" to={"/"}>
            Main
          </Link>
        );
      case "contacts":
        return (
          <Link className="header__link" to={"/contacts"}>
            Contacts
          </Link>
        );
      case "support":
        return (
          <Link className="header__link" to={"/support"}>
            Support
          </Link>
        );

      default:
        break;
    }
  }
}
