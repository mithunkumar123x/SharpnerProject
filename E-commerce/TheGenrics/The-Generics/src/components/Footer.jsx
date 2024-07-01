import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col}  from "react-bootstrap";

const Footer = () => {
    return (
      <Row
      className="bg-info justify-content-evenly align-items-center px-4 "
      style={{ height: "200px" }}
    >
      <Col md={5} className="text-center my-5 ">
        <span className="display-4 fw-semibold text-white">The Generics</span>
      </Col>

      <Col md={4}>
        <i
          className="bi bi-youtube text-danger mx-5 "
          style={{ fontSize: "30px" }}
        ></i>
        <i
          className="bi bi-spotify text-success mx-5 "
          style={{ fontSize: "30px" }}
        ></i>
        <i
          className="bi bi-facebook text-primary mx-5"
          style={{ fontSize: "30px" }}
        ></i>
      </Col>
    </Row>
    )
}

export default Footer;
