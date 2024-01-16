import React from 'react';
import { NavDropdown, Navbar, Form, FormControl, Button, Container, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
return (
    <Navbar bg="dark" variant='dark' expand="1g">
        <Navbar.Brand href="#home" style={{fontWeight: 'bold'}}>DECOMUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light"> Search</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>

)
}
export default NavbarComponent