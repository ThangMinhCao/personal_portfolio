import styled from "styled-components";
import { Link } from "react-scroll";
import { LightText } from "./Typography";

const NavContainer = styled.nav`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: 450px) {
    visibility: hidden;
  }
`

const NavItem = styled(Link)`
  font-size: 30px;
  font-weight: 300;
  margin: 20px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <NavItem to="/">
        <LightText>Welcome</LightText>
      </NavItem>
      <NavItem to="/">
        <LightText>Education</LightText>
      </NavItem>
      <NavItem to="/">
        <LightText>Experiences</LightText>
      </NavItem>
      <NavItem to="/">
        <LightText>Projects</LightText>
      </NavItem>
    </NavContainer>
  );
}

export default Navbar;
