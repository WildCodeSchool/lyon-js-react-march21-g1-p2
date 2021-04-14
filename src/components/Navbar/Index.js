/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const textDecoration = {
  textDecoration: 'none',
};
const logo = {
  textDecoration: 'none',
  fontFamily: 'var(--logo-font)',
  fontSize: '35px',
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink style={logo} to="/Home">
          <h1>U'Pizz</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink style={textDecoration} to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink style={textDecoration} to="/order" activeStyle>
            Order
          </NavLink>
          <NavLink style={textDecoration} to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink style={textDecoration} to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink style={textDecoration} to="/sign-in">
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
