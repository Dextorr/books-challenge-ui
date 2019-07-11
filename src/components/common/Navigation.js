import React from 'react'

import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Link to="/">
        <Navbar.Brand>BooksOnTap</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/">
            <Navbar.Text>Home</Navbar.Text>
          </Link>
          <Nav.Link>Basket</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Navigation)
