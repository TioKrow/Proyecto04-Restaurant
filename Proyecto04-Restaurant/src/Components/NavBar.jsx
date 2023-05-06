import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarProyect = () => {
    return (
        <>
            <Navbar bg='dark' variant="dark" expand='sm'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/SobreNosotros">SobreNosotros</Nav.Link>
                            <Nav.Link as={Link} to="/Carta">Carta</Nav.Link>
                            <Nav.Link as={Link} to="/Reservas">Reservas</Nav.Link>
                            <Nav.Link as={Link} to="/Prueba">Prueba</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
};

export default NavBarProyect;