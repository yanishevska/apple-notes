import style from "./SearchBox.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNotes } from "../../context";
import React from "react";

const SearchBox = (props) => {
  const { handleChange } = useNotes();
  return (
    <div className={style.bgColor}>
      <label>
        <input
          style={{ height: "33px", textAlign: "center" }}
          className={style.inputSearch}
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
        <CiSearch />
      </label>
    </div>
  );
};
export default SearchBox;
