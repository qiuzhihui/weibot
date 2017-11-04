import React from 'react'
// import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const header = {
  marginTop: '0px'
}

const Header = () => (

  <nav className="nav-bar">
    <div className="container" style={header}>
      <ul>
        <li><a href="#">REPAIR</a></li>
        <li><a href="#">WHO WE ARE</a></li>
        <li className="pull-right"><a href="#">CONTACT US</a></li>
      </ul>
    </div>
  </nav>
)
export default Header
