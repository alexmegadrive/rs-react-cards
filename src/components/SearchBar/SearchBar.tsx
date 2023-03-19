import React from "react";
import "./searchBar.scss";

interface ISearchBarProps {
  value: string;
}

export default class SearchBar extends React.Component {
  constructor(props: ISearchBarProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    value: localStorage.getItem("search") ? localStorage.getItem("search") : "",
  };

  componentWillUnmount() {
    localStorage.setItem("search", this.state.value as string);
  }

  async handleChange(e: React.SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    this.setState({ value: input.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <div className="search__button"></div>
      </div>
    );
  }
}
