import React, { useState } from "react";
import style from "styled-components";

const Input = style.input`
        float: left;
        width: 500px;
        background-color: #ffffff;
        border:none;
        height: 50px;
        box-sizing: border-box;
        padding: 0 20px;
        border-radius: 5px;
        outline: none;
    `;
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form method="get">
      <Input
        type="text"
        name="query"
        placeholder="Search Country"
        value={query}
        onChange={handleChange}
        required
      />
    </form>
  );
};

export default SearchBar;
