import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.nav`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1;
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
        Hello
      </NavItem>
      <NavItem to="/">
        Hello
      </NavItem>
      <NavItem to="/">
        Hello
      </NavItem>
      <NavItem to="/">
        Hello
      </NavItem>
    </NavContainer>
  );
}

export default Navbar;
