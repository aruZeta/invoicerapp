import { Col, Container, Row } from 'react-bootstrap';

import Invoice from './Invoice';

const NewInvoice = () => {
    return (
        <Col className="mb-4"><Invoice /></Col>
    );
};

const MyContainer = () => {
    return (
        <Container fluid className="flex-fill">
            <Row xs={1} className="mt-4">
                <NewInvoice />
            </Row>
        </Container>
    );
};

export default MyContainer;
