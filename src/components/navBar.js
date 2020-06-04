import React from "react"
import { Link } from "gatsby"

import Navlink from "../components/navlink"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';


const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Navlink page = "/" text = "Home"/>
            <Navlink page = "Projects"/>
            <Navlink page = "Skills"/>
            <Navlink page = "Contact"/>
          </Nav>
          <div>
              <IconContext.Provider value={{ color: "white", className: "nav-fa-icon", size:"1.2em"}}>
                  <a href="https://www.linkedin.com/in/anthony-pietrofeso/" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Appietro516"  title="Github">
                    <FaGithub />
                  </a>
                  <a href="https://stackoverflow.com/users/13677454/appietro516?tab=profile" title="StackOverflow">
                    <FaStackOverflow />
                  </a>
              </IconContext.Provider>
          </div>
          <div className="nav-gap mb-3"></div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
// <Link to="/" className="link-no-style">
//   <Navbar.Brand as="span" id="main-title">Anthony Pietrofeso</Navbar.Brand>
// </Link>
//
export default CustomNavbar
