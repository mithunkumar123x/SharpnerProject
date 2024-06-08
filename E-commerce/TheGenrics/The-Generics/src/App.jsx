import './App.css'
import { useState } from 'react';
import { Row,Col,Button,Container } from 'react-bootstrap';
import Products from './components/Product';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Offcanvas from "react-bootstrap/Offcanvas" 
import { cartElements } from './components/Item';
import {CartContextProvider} from './components/CartContext/CartContext';


function App() {
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
     <CartContextProvider>
      <Header onShow={handleShow} onHide = {handleClose} />
      <Offcanvas show={show} placement={"end"} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>CART</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
           <Row>
            <Col>
             <table className="table-borderless text-center">
             <thead>
             <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
               </tr>
             </thead>
             <tbody>
              {cartElements.map((item) => {
                return (
                  <tr 
                  key={item.title + item.quantity}
                  className="align-items-centre"
                  >
                    <td>
                      <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="img-fluid "
                      style={{ width: "60px"}} 
                      />
                      <p>{item.title}</p>
                    </td>
                    <td>${item.price}</td>
                    <td className="d-flex">
                      <span className="border border-1 border-primary mx-4 px-3 py-0">
                        {item.quantity}
                      </span>
                      <Button variant="danger">Remove</Button>
                    </td>
                  </tr>
                )
              })}
             </tbody>
             </table>
            </Col>
           </Row>
           <Row>
            <Col className="text-end">
              <h4>
                Total Amount <span>${}</span>
              </h4>
            </Col>
           </Row>
           <Row>
            <Col className="text-centre mt-5">
            <Button className="primary fw-semibold fs-5">PURCHASE</Button>
            </Col>
           </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <Header onShow={handleShow} onHide = {handleClose} />
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
            <Button 
            className="ms-5 my-4 text-info"
             variant="secondary"
             >
              See The Cart
            </Button>
          </Col>
        </Row>
      
        <Footer />
      </Container>
    </CartContextProvider>
  );
}

export default App
