import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import { CartContext } from './CartContext/CartContext';

const Header = ({ onShow }) => {
  const { cartData } = React.useContext(CartContext);

  const totalItems = cartData.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Navbar bg="dark" expand="md" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Generics</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className="mx-3 text-decoration-none" activeStyle={{ color: "#4169E1" }}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/store" className="mx-3 text-decoration-none" activeStyle={{ color: "#4169E1" }}>Store</Nav.Link>
          <Nav.Link as={NavLink} to="/home" className="mx-3 text-decoration-none" activeStyle={{ color: "#4169E1" }}>About</Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="mx-3 text-decoration-none" activeStyle={{ color: "#4169E1" }}>About</Nav.Link>
        </Nav>
        <Nav onClick={onShow}>
          <Navbar.Text className="border-success border p-2 rounded-2">
            Cart
            <span className="badge bg-secondary p-2 ms-1">{totalItems}</span>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
