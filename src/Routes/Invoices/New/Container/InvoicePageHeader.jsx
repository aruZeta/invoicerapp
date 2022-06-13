import { useState } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { useIntl } from "react-intl";

import MyInput from './MyInput';

const HeaderDetails = ({intl}) =>
<Card.Body className="p-2 d-flex flex-column gap-2">
    <Form.Group>
        <MyInput
            type="text"
            placeholder={intl.formatMessage({id: "invoice.header.address"})}
        />
    </Form.Group>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1 1 100%"}}>
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.header.town/city"})}
            />
        </Form.Group>
        <Form.Group>
            <MyInput
                className="text-end"
                type="text"
                placeholder={intl.formatMessage({id: "invoice.header.cp"})}
            />
        </Form.Group>
        <Form.Group>
            <MyInput
                className="text-end"
                type="text"
                placeholder={intl.formatMessage({id: "invoice.header.date"})}
            />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1 1 200%"}}>
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.header.sm-desc"})}
            />
        </Form.Group>
        <Form.Group>
            <MyInput
                className="text-end"
                type="text"
                placeholder={intl.formatMessage({id: "invoice.header.no"})}
            />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "0 1 35%"}}>
            <MyInput
                className=""
                type="tel"
                placeholder={intl.formatMessage({id: "invoice.header.telephone"})}
            />
        </Form.Group>
        <Form.Group className="flex-fill">
            <MyInput
                className="text-end"
                type="email"
                placeholder={intl.formatMessage({id: "invoice.header.email"})}
            />
        </Form.Group>
    </div>
</Card.Body>;

const InvoicePageHeader = () => {
    const intl = useIntl();
    
    const [image, setImage] = useState(
        intl.formatMessage({id: "invoice.header.img"}));

    const changeImage = (event) => {
        console.log(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleChange = () => {
        return (event) => changeImage(event);
    }
    
    return (
        <Row>
            <Col xs={5}>
                <div className="position-relative w-100 h-100">
                    <input
                        type="file"
                        accept="image/*"
                        className="position-absolute w-100 h-100 opacity-0"
                        onChange={handleChange()}
                    />
                    <Image
                        fluid
                        rounded
                        src={image}
                        className="w-100 h-100"
                    />
                </div>
            </Col>
            <Col xs={7}>
                <Card bg="light" className="w-100 h-100">
                    <HeaderDetails intl={intl} />
                </Card>
            </Col>
        </Row>
    );
};

export default InvoicePageHeader;
