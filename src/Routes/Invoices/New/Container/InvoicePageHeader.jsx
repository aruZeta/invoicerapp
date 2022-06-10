import { Card, Col, Form, Image, Row } from "react-bootstrap";

const placeholder = "https://via.placeholder.com/330x140/f2e9e1/575279?text=invoicerapp";

const MyInput = ({type, placeholder, className, required}) =>
<Form.Control
    className={`lh-0 py-0 px-1 border-0 border-bottom border-1 rounded-0 ${className}`}
    type={type}
    placeholder={placeholder}
    required={required ? true : false}
/>;

const HeaderDetails = () =>
<Card.Body className="p-2 d-flex flex-column gap-2">
    <Form.Group>
        <MyInput type="text" placeholder="Address" />
    </Form.Group>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1 1 100%"}}>
            <MyInput type="text" placeholder="Town/City" />
        </Form.Group>
        <Form.Group>
            <MyInput className="text-end" type="text" placeholder="CP" />
        </Form.Group>
        <Form.Group>
            <MyInput className="text-end" type="text" placeholder="Fecha" />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1 1 200%"}}>
            <MyInput type="text" placeholder="Small Description" />
        </Form.Group>
        <Form.Group>
            <MyInput className="text-end" type="text" placeholder="N°" />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "0 1 35%"}}>
            <MyInput className="" type="tel" placeholder="Telephone" />
        </Form.Group>
        <Form.Group className="flex-fill">
            <MyInput className="text-end" type="email" placeholder="Email" />
        </Form.Group>
    </div>
</Card.Body>;

const InvoicePageHeader = () =>
<Row>
    <Col xs={5}>
        <Image fluid rounded src={placeholder} className="w-100 h-100" />
    </Col>
    <Col xs={7}>
        <Card bg="light" className="w-100 h-100">
            <HeaderDetails />
        </Card>
    </Col>
</Row>;

export default InvoicePageHeader;
