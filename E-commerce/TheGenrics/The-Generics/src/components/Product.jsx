import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { productsArr } from "./Item";
import { CartContext } from "./CartContext/CartContext";

const Products = () => {
  const { onAddToCart } = useContext(CartContext); 

  return (
    <Row className="justify-content-center text-center p-5">
      {productsArr.map((product) => {
        return (
          <Col md={5} key={product.title}>
            <h4 className="mb-4">{product.title}</h4>
            <img src={product.imageUrl} alt={product.title} className="img-fluid" />
            <Row className="align-items-center mb-4">
              <Col md>
                <p>${product.price}</p>
              </Col>
              <Col md>
                <Button variant="info" onClick={() => onAddToCart({ ...product, id: product.imageUrl })}>
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default Products;
