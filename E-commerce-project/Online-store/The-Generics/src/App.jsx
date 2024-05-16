import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import {Navbar,Nav, NavLink} from 'react-bootstrap'

function App() {
  

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Nav.Link className="me-auto">Home</Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
      
    

    </>
  )
}

export default App
