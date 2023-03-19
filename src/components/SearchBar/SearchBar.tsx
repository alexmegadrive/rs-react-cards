import React from "react";
import "./searchBar.scss";
// import I

interface ISearchBarProps {
  filterProducts: (value: string) => void | undefined;
}

class SearchBar extends React.Component<ISearchBarProps> {
  state = {
    value: localStorage.getItem("search")
      ? (localStorage.getItem("search") as string)
      : "",
  };
  handleChangeInput = this.handleChange.bind(this);

  componentDidMount() {
    this.props.filterProducts(this.state.value);
  }
  componentWillUnmount() {
    localStorage.setItem("search", this.state.value as string);
  }

  async handleChange(e: React.SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    this.setState({ value: input.value });
    this.props.filterProducts(input.value);
  }
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChangeInput}
        ></input>
        <div className="search__button"></div>
      </div>
    );
  }
}

export default SearchBar;
