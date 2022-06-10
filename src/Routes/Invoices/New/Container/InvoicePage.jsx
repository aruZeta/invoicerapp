import { Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";

import InvoicePageHeader from "./InvoicePageHeader";
import InvoicePageSubHeader from "./InvoicePageSubHeader";

const border = "border border-4 border-dark";
const rounded = "rounded rounded-4";

const InvoicePage = ({extra}) =>
<Form className={`invoice py-3 mx-auto ${border} ${rounded}`}>
    <Row xs={1} className="mx-0 gap-3">
        { extra
          ? null
          : <Fragment>
                <Col>
                    <InvoicePageHeader />
                </Col>
                <Col>
                    <InvoicePageSubHeader />
                </Col>
            </Fragment>
        }
    </Row>
</Form>;

export default InvoicePage;
