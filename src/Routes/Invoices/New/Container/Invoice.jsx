import { Card, Col, Form, Image, Row } from "react-bootstrap";

import InvoiceHeader from "./InvoiceHeader";

const border = "border border-4 border-dark";
const rounded = "rounded rounded-4";

const Invoice = () => {
    return (
        <Form className={`invoice mx-auto ${border} ${rounded}`}>
            <Row xs={1} className="mx-0">
                <Col className="my-3">
                    <InvoiceHeader />
                </Col>
            </Row>
        </Form>
    );
}

export default Invoice;
