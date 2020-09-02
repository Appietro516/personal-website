import React from "react"
import { Link } from "gatsby"

import Navlink from "../components/navlink"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaStackOverflow, FaTrello } from 'react-icons/fa';


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
            {/* <Navlink page = "Skills"*/}
            <Navlink page = "Contact"/>
            <div>
                <a className="nav-link" href ="https://drive.google.com/file/d/1mU8UP-n07u4xBK9B1m1il1XdpsiVjmUJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div>
                <a className="nav-link" href ="https://drive.google.com/file/d/103jPjF-yQOd77WbyPcpXv9bQRdqcNyzG/view?usp=sharing" target="_blank" rel="noopener noreferrer">Transcript</a>
            </div>
          </Nav>
          <div id="nav-external-buttons" >
              <IconContext.Provider value={{className: "nav-fa-icon ", size:"2em"}}>
                  <a href="https://www.linkedin.com/in/anthony-pietrofeso/" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Appietro516" title="Github">
                    <FaGithub />
                  </a>
                  <a href="https://stackoverflow.com/users/13677454/appietro516?tab=profile" title="StackOverflow">
                    <FaStackOverflow />
                  </a>
                  <a href="https://trello.com/appietro516" title="Trello">
                    <FaTrello />
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
