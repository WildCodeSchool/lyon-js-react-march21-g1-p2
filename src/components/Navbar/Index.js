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
        <NavLink style={logo} to="/home">
          <h1>U'Pizz</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink style={textDecoration} to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink style={textDecoration} to="/order" activeStyle>
            Commander
          </NavLink>
          <NavLink style={textDecoration} to="/contact" activeStyle>
            Contactez Nous
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
