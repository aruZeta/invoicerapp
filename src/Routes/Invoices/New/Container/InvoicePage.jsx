import { Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";

import InvoicePageHeader from "./InvoicePageHeader";
import InvoicePageSubHeader from "./InvoicePageSubHeader";
import InvoicePageBody from "./InvoicePageBody";

const border = "border border-4 border-dark";
const rounded = "rounded rounded-4";

const InvoicePage = ({extra}) =>
<Form className={`invoice py-3 mx-auto ${border} ${rounded}`}>
    <Row xs={1} className="mx-0 gap-3 h-100 flex-column">
        { extra
          ? null
          : <Fragment>
                <Col className="flex-grow-0 flex-shrink-0">
                    <InvoicePageHeader />
                </Col>
                <Col>
                    <InvoicePageSubHeader />
                </Col>
            </Fragment>
        }
        <Col className="flex-fill">
            <InvoicePageBody />
        </Col>
    </Row>
</Form>;

export default InvoicePage;
