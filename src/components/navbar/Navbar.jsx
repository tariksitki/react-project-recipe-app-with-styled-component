
import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to={"/"} >RECIPE APP</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {/* icinde bilgi olmayacaksa spanlari empty element olarak tercih edelim */}
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen = {isOpen}>
        <MenuLink to={'/about'} >About</MenuLink>
        <MenuLink to={'/github'} >Github</MenuLink>
        <MenuLink to={'/logout'} >Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar