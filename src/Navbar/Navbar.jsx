import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LangDropdownItems = ({allLocales, onClickHandler}) => {
    const elements = [];

    const handleClick = (locale) => {
        return () => onClickHandler(locale);
    }

    allLocales.forEach(locale => elements.push(
        <NavDropdown.Item key={locale} onClick={handleClick(locale[0])}>
            {`${locale[1]} ${locale[2]}`}
        </NavDropdown.Item>
    ));
    return elements;
};

const MyNavbar = ({actualLocale, allLocales, onClickHandler}) =>
<Navbar variant="dark" bg="dark" expand="md">
    <Container fluid>
        {
        // <LinkContainer to="/">
            // <Navbar.Brand>Icon</Navbar.Brand>
        // </LinkContainer>
        }
        <Navbar.Toggle aria-controls="Navbar-Nav" />
        <Navbar.Collapse id="Navbar-Nav">
            <Nav className="flex-fill">
                <LinkContainer to="/invoicerapp">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown
                    className="ms-auto dropstart"
                    title={`${actualLocale[0]} ${actualLocale[1]}`}
                    id="navbar-language">
                    <LangDropdownItems
                        allLocales={allLocales}
                        onClickHandler={onClickHandler}
                    />
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>;

export default MyNavbar;
