import { Container, Nav, Navbar } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Icon</Navbar.Brand>
                <Navbar.Toggle aria-controls="Navbar-Nav" />
                <Navbar.Collapse id="Navbar-Nav">
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
