import React from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  destination: string;
  text: string;
}
interface isActive {
  isActive: boolean;
}

const NavigationLink = ({ destination, text }: ILink) => {
  return (
    <NavLink
      className={({ isActive }: isActive) =>
        isActive ? "header__link active" : "header__link"
      }
      to={destination}
    >
      {text}
    </NavLink>
  );
};

export default NavigationLink;
