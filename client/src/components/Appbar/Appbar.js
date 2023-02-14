import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Appbar.css";

const Appbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="appbar-main">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Fine Designs
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/login/">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Create Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/support">Support</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Appbar;
