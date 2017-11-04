import React from 'react'
// import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const header = {
  marginTop: '0px'
}

const Header = () => (
  // <div style={{'backgroundColor':'black'}}>
  //   <Navbar inverse collapseOnSelect>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <div style={{'fontSize': 22, 'font':'roboto', 'color':'white'}}>
  //           <a href="#" style={{'color':'white', 'textDecoration':'none'}}>Uboston Auto School</a>
  //         </div>
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
  //     </Navbar.Header>
  //     <Navbar.Collapse>
  //       <Nav>
  //         <NavItem eventKey={1} href="#">Repair222</NavItem>
  //         <NavItem eventKey={2} href="#">Used Car</NavItem>
  //         <NavItem eventKey={2} href="#">Rental</NavItem>
  //         <NavItem eventKey={2} href="#">Education</NavItem>
  //       </Nav>
  //       <Nav pullRight>
  //         <NavItem eventKey={1} href="#">Contact</NavItem>
  //         <NavItem eventKey={2} href="#">三友车行</NavItem>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // </div>

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
