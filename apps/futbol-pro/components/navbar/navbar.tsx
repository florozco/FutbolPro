import styled from 'styled-components';
import Link from 'next/Link';
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

/* eslint-disable-next-line */
export interface NavbarProps {}

const StyledNavbar = styled.div`
  color: pink;
`;

export function Navbar(props: NavbarProps) {
  return (
    <>
      <Nav>
        <Bars />  
        <NavMenu>
          <NavBtn>
            <NavLink href='/'  >
              index
            </NavLink>
          </NavBtn>
         <NavBtn>
          <Link href='/about' >
            about
          </Link>
         </NavBtn>
          <NavBtn>
          <Link href='/namePlusFlag' >
            namePlusFlag
          </Link>
          </NavBtn>      
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>   
      </Nav>
    </>
  );
}

export default Navbar;
