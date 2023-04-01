import React, { useState, useEffect } from "react";
import "./searchBar.scss";

interface ISearchBarProps {
  filterProducts: (value: string) => void | undefined;
}

const SearchBar = ({ filterProducts }: ISearchBarProps) => {
  const [value, setValue] = useState(localStorage.getItem("search") || "");

  useEffect(() => {
    filterProducts(value);
    return () => (localStorage["search"] = value as string);
  }, [value]);

  const handleChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setValue(input.value);
    filterProducts(input.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={value}
        onChange={handleChange}
      ></input>
      <div className="search__button"></div>
    </div>
  );
};

export default SearchBar;
