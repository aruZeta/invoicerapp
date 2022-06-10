import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = () =>
<Navbar variant="dark" bg="dark" expand="md">
    <Container fluid>
        {
        // <LinkContainer to="/">
            // <Navbar.Brand>Icon</Navbar.Brand>
        // </LinkContainer>
        }
        <Navbar.Toggle aria-controls="Navbar-Nav" />
        <Navbar.Collapse id="Navbar-Nav">
            <Nav>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>;

export default MyNavbar;
