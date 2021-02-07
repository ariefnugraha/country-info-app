import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
  background-color: #ffffff;
  padding: 20px 80px;

`;

const ToggleTheme = styled.a`
  float: right;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight:bold;
`

const Navbar = () => {
  return (
    <Nav>
      <Title>Where in the world?</Title>
      <ToggleTheme>Dark Mode</ToggleTheme>
    </Nav>
  );
};

export default Navbar;
