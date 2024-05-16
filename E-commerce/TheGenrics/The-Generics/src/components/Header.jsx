import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, NavbarText} from "react-bootstrap";


export const Header = () => {
    return (
        <Navbar bg="dark" expand="sm" variant="dark" fixed="top">
            <Container>
             <Navbar.Brand href="#TheGenerics">The Generics</Navbar.Brand>
             <Nav>
             <Nav.Item>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#store">Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>
             </Nav>
             <Nav>
                <NavbarText className="border-success border p-2 rounded-2">
                    Cart<span className="badge bg-secondary p-2 ms-1" >0</span></NavbarText>
             </Nav>
            </Container>
        </Navbar>
    )
}