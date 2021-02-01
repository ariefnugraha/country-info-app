import React, { useState, useEffect } from "react";
import style from "styled-components";
import axios from "axios";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ListCountries from "../components/ListCountries";

const Main = () => {
  const Main = style.div`
        min-height: 100vh;
        background-color: #fafafa;
        padding: 40px 80px;  
    `;

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <div>
          <SearchBar />
          <Filter />
        </div>

        <ListCountries countries={countries} />
      </Main>
    </>
  );
};

export default Main;
