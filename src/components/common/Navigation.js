import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand>BooksOnTap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Basket</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
