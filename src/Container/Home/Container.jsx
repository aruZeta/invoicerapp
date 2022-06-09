import { Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyHomeContainer = () => {
    return (
        <Container fluid="lg" className="flex-fill d-flex">
            <LinkContainer to="/invoices/new" className="m-auto">
                <Button variant="success">New Invoice</Button>
            </LinkContainer>
        </Container>
    );
};

export default MyHomeContainer;
