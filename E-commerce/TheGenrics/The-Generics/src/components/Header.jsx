import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, NavbarText} from "react-bootstrap";


export const Header = ({onShow}) => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container>
             <Navbar.Brand href="/home">Home</Navbar.Brand>
             <Navbar.Brand href="/store">Store</Navbar.Brand>
             <Navbar.Brand href="/about">About</Navbar.Brand>
             <Nav onClick={onShow}>
                <NavbarText className="border-success border p-2 rounded-2">
                    Cart 
                    <span className="badge bg-secondary p-2 ms-1" >0</span>
                </NavbarText>
             </Nav>
            </Container>
        </Navbar>
    )
}