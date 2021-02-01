import React from "react";
import style from "styled-components";

import FlagItem from "../components/FlagItem";

const Container = style.div`
  clear:both;
`;

const FlexLayout = style.div`
display:flex;
flex-flow: row wrap;
${FlagItem}:nth-child(4n + 4) {
    margin-right: 0px;
}
`;

const ListCountries = ({ countries }) => {
  const renderFlag = countries.map((country) => {
    return (
      <FlagItem
        key={country.name}
        name={country.name}
        capital={country.capital}
        region={country.region}
        population={country.population}
        flag={country.flag}
      />
    );
  });

  return (
    <Container>
      <FlexLayout>{renderFlag}</FlexLayout>
    </Container>
  );
};

export default ListCountries;
