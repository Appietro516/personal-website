import React from "react"
import { Link } from "gatsby"

import Navlink from "../components/navlink"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span" id="main-title">Anthony Pietrofeso</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Navlink page = "About"/>
            <Navlink page = "Projects"/>
            <Navlink page = "Contact"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
