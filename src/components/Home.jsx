import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-end">
          {/* <Navbar.Brand href="#home">PortFolio</Navbar.Brand> */}
          <Nav >
            <Nav.Link href="#propos">A propos</Nav.Link>
            <Nav.Link href="#competences">Competences</Nav.Link>
            <Nav.Link href="#projet">Projets</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
 
    </>
  )
}
