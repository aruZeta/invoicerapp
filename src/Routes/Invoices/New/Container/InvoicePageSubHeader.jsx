import { Card, Form } from "react-bootstrap";

import MyInput from './MyInput';

const SubHeaderDetails = () =>
<Card.Body className="p-2 d-flex flex-column gap-2">
    <div className="d-flex gap-2">
        <Form.Group className="flex-fill">
            <MyInput type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group style={{flex: "0 1 20%"}}>
            <MyInput type="text" placeholder="DNI" />
        </Form.Group>
        <Form.Group style={{flex: "0 1 20%"}}>
            <MyInput className="text-end" type="tel" placeholder="Telephone" />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1"}}>
            <MyInput type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group style={{flex: "0 1 25%"}}>
            <MyInput type="text" placeholder="Town/City" />
        </Form.Group>
        <Form.Group style={{flex: "0 1 15%"}}>
            <MyInput className="text-end" type="text" placeholder="CP" />
        </Form.Group>
    </div>
</Card.Body>;

const InvoicePageSubHeader = () =>
<Card bg="light" className="w-100 h-100">
    <h5 className="px-2 py-1 m-0">Client:</h5>
    <SubHeaderDetails />
</Card>;

export default InvoicePageSubHeader;
