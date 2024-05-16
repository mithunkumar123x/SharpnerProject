import React from 'react'
import './App.css'
import { Row,Col,Button,Container } from 'react-bootstrap';
import Products from './components/Product';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-2 bg-secondary py-5 ">
          <Col>
            <h1 className="mt-5 display-1 text-center text-white fw-bold ">
              The Generics
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="display-6  mt-4 fw-medium  text-center">MUSIC</h3>
          </Col>
        </Row>
        <Products />
        <Row className="justify-content-around  ">
          <Col md={2}>
            <Button className="ms-5 my-4 text-info" variant="secondary">
              See The Cart
            </Button>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default App
