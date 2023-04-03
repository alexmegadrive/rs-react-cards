import React, { useState, useEffect, useRef } from "react";
import "./searchBar.scss";

interface ISearchBarProps {
  filterProducts: (value: string) => void | undefined;
}

const SearchBar = ({ filterProducts }: ISearchBarProps) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem("search") || ""
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current = value;
  }, [value]);

  useEffect(() => {
    setIsLoaded(true);
    filterProducts(value);
    return () => {
      localStorage["search"] = searchValue.current as string;
    };
  }, []);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
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
