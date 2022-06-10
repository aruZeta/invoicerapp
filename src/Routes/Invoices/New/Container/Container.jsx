import { Fragment, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import InvoicePage from './InvoicePage';
import InvoicePageExtra from './InvoicePageExtra';

const MyContainer = () => {
    const [invoicePagesCount, setInvoicePagesCount] = useState(() => {
        return 1;
    });

    const addInvoicePage = () => {
        setInvoicePagesCount(invoicePagesCount + 1);
    };

    const handleClick = () => {
        return () => addInvoicePage();
    }

    const invoicePagesExtra = () => {
        const invoicePages = [];
        for (let i = 1; i < invoicePagesCount; i++) {
            invoicePages.push(
                <Col key={i} className="mb-4">
                    <InvoicePageExtra />
                </Col>
            )
        }

        return invoicePages;
    }

    return (
        <Container fluid className="flex-fill">
            <Row xs={1} className="mt-4 mb-4">
                <Col className="mb-4"><InvoicePage /></Col>
                {invoicePagesExtra()}
                <Col>
                    <Button
                        onClick={handleClick()}
                        variant="dark"
                        className="new-invoice-btn mx-auto d-block"
                    >
                        New Page
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default MyContainer;
