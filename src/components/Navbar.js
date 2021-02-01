import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  background-color: #ffffff;
  padding: 20px 80px;
`;

Link = styled.a`
  font-size: 20px;
  font-weight: 700;
`;

const ToggleTheme = styled.a`
  float: right;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="#">Where in The World ?</Link>
      <ToggleTheme>Dark Mode</ToggleTheme>
    </Nav>
  );
};

export default Navbar;
