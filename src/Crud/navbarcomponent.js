import React from 'react';
import gambar1 from '../foto/alpa.jpeg'
import { NavDropdown, Navbar, Form, FormControl, Button, Container, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
return (
    <Navbar bg="dark" variant='dark' expand="1g">

        <Container>
        <Navbar.Brand href="#home" style={{fontWeight: 'bold'}} id='judull'>
            <img src={gambar1} id='gambar'></img>
            DECOMUS</Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />      
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <Nav.Link href="#Daftarbuku">Daftar Buku</Nav.Link>
                <NavDropdown title="Lainnya" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Fiksi</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Novel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Biografi</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Sejarah</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Cari Buku" className="mr-sm-2" />
            <Button variant="outline-light"> Cari</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>

)
}
export default NavbarComponent