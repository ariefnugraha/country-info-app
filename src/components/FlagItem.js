import React from "react";
import style from "styled-components";

const CountryInfo = style.div`
        width: calc(20% - 20px);
        margin-right: 50px;
        margin-bottom: 50px;      
        border-radius: 5px;
        background-color: #ffffff;
    `;

const ImageBox = style.div`
        width:100%;
        height: 200px;
    `;

const Flag = style.img`
        width:100%;
        height:100%;
        object-fit:cover;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    `;

const Info = style.div`
        padding: 10px;
    `;
const Name = style.h1`
        font-size: 14px;
    `;
const FlagItem = (props) => {
  return (
    <CountryInfo>
      <ImageBox>
        <Flag src={props.flag} alt="Flag" />
      </ImageBox>
      <Info>
        <Name>{props.name}</Name>
        <p>Population: {props.population}</p>
        <p>Capital: {props.capital}</p>
        <p>Region: {props.region}</p>
      </Info>
    </CountryInfo>
  );
};

export default FlagItem;
