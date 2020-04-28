import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const NavLink = ({ page }) => {
    return (
    <>
        <Link to={ page.toLowerCase() } className="link-no-style">
          <Nav.Link as="span" eventKey={ page.toLowerCase() }>
            { page }
          </Nav.Link>
        </Link>
    </>
    )
}

export default NavLink
