import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import useDebounce from "../../hooks/useDebounce";
import "./searchBar.scss";

interface ISearchBarProps {
  callback: (value: string) => void | undefined | Promise<void>;
  queryKey: string;
}

const SearchBar = ({ callback, queryKey }: ISearchBarProps) => {
  const { setSearchQuery } = useActions();
  const [value, setValue] = useState<string>(
    localStorage.getItem(queryKey) || ""
  );
  const searchValue = useRef("");
  const debouncedValue = useDebounce<string>(value, 500);

  const storeSearchQuery = useSelector((state) => state.search);
  console.log("storeSearchValue :", storeSearchQuery);
  // const storeState = useSelector((state) => state);
  // console.log("storeState :", storeState);

  useEffect(() => {
    searchValue.current = value;
    return () => {
      localStorage[queryKey] = searchValue.current as string;
    };
  }, [value]);

  useEffect(() => {
    setSearchQuery(value);
    callback(value);
    // console.log("storeSearchValue :", storeSearchValue);
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
