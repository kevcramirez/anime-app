import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb() {
    return (
        <Container>
            <Navbar expand="md" className='nvbar'>
                {/* <Container> */}
                <Navbar.Brand href="#home">AnimeBinge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='align-items-center'>
                        <Nav.Link href="#home" className='ms-lg-5'>Home</Nav.Link>
                        <Nav.Link href="#discover" className='ms-lg-5'>Discover</Nav.Link>
                        <Nav.Link href="#about" className='ms-lg-5'>About Us</Nav.Link>
                        <Nav.Link href="#">
                            <Button variant="outline-secondary" className="ms-lg-5 ps-lg-3 pe-lg-3">Sign Up</Button>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <Button variant="primary" className="ms-lg-5 ps-lg-3 pe-lg-3">Log In</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </Container>
    );
}

export default Navb;