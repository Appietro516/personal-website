import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const NavLink = ({ page, text }) => {

    return (
    <>
        <div>
        <Link to={ page.toLowerCase() } className="link-no-style">
          <Nav.Link as="span" eventKey={ page.toLowerCase() }>
            { text ? text : page }
          </Nav.Link>
        </Link>
        </div>
    </>
    )
}

export default NavLink
