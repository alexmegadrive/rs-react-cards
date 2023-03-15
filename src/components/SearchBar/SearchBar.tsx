import React from "react";
import "./searchBar.scss";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="search__input"></input>
        <div className="search__button"></div>
      </div>
    );
  }
}
