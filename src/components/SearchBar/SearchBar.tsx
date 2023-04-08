import React, { useState, useEffect, useRef } from "react";
import "./searchBar.scss";

interface ISearchBarProps {
  callback: (value: string) => void | undefined | Promise<void>;
  queryKey: string;
}

const SearchBar = ({ callback, queryKey }: ISearchBarProps) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem("search") || ""
  );
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current = value;
  }, [value]);

  useEffect(() => {
    callback(value);
    return () => {
      localStorage[queryKey] = searchValue.current as string;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setValue(input.value);
    callback(input.value);
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
