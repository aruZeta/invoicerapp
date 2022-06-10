import { Col, Form, Row } from "react-bootstrap";

import InvoicePageHeader from "./InvoicePageHeader";

const border = "border border-4 border-dark";
const rounded = "rounded rounded-4";

const InvoicePage = ({extra}) =>
<Form className={`invoice mx-auto ${border} ${rounded}`}>
    <Row xs={1} className="mx-0">
        <Col className="my-3">
            {extra ? null : <InvoicePageHeader />}
        </Col>
    </Row>
</Form>;

export default InvoicePage;
