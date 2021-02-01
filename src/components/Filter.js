import React, { useState } from "react";
import style from "styled-components";

const Select = style.select`
        float:right;
        width:200px;
        height:50px;
        border-radius:5px;
        border:none;
        outline:none;
        box-sizing: border-box;
        padding: 0px 20px;
    `;

const Filter = () => {
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Select
      name="filter"
      onChange={handleChange}
      placeholder="Filter By Region"
      required
    >
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </Select>
  );
};

export default Filter;
