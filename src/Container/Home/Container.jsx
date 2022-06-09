import { Button, Container } from 'react-bootstrap';

const MyHomeContainer = () => {
    return (
        <Container fluid="lg" className="flex-fill d-flex">
            <a href="invoices/new" className="m-auto">
                <Button variant="success">New Invoice</Button>
            </a>
        </Container>
    );
};

export default MyHomeContainer;
