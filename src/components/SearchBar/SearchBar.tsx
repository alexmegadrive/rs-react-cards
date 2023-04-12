import React, { useState, useEffect, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";
import "./searchBar.scss";

interface ISearchBarProps {
  callback: (value: string) => void | undefined | Promise<void>;
  queryKey: string;
}

const SearchBar = ({ callback, queryKey }: ISearchBarProps) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(queryKey) || ""
  );
  const searchValue = useRef("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    searchValue.current = value;
    return () => {
      localStorage[queryKey] = searchValue.current as string;
    };
  }, [value]);

  useEffect(() => {
    callback(value);
  }, [debouncedValue]);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setValue(input.value);
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
