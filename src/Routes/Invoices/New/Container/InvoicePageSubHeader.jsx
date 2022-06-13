import { Card, Form } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";

import MyInput from './MyInput';

const SubHeaderDetails = ({intl}) =>
<Card.Body className="p-2 d-flex flex-column gap-2">
    <div className="d-flex gap-2">
        <Form.Group className="flex-fill">
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.subheader.name"})}
            />
        </Form.Group>
        <Form.Group style={{flex: "0 1 20%"}}>
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.subheader.dni"})}
            />
        </Form.Group>
        <Form.Group style={{flex: "0 1 20%"}}>
            <MyInput
                className="text-end"
                type="tel"
                placeholder={intl.formatMessage({id: "invoice.subheader.telephone"})}
            />
        </Form.Group>
    </div>
    <div className="d-flex gap-2">
        <Form.Group style={{flex: "1"}}>
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.subheader.address"})}
            />
        </Form.Group>
        <Form.Group style={{flex: "0 1 25%"}}>
            <MyInput
                type="text"
                placeholder={intl.formatMessage({id: "invoice.subheader.town/city"})}
            />
        </Form.Group>
        <Form.Group style={{flex: "0 1 15%"}}>
            <MyInput
                className="text-end"
                type="text"
                placeholder={intl.formatMessage({id: "invoice.subheader.cp"})}
            />
        </Form.Group>
    </div>
</Card.Body>;

const InvoicePageSubHeader = () => {
    const intl = useIntl();

    return (
        <Card bg="light" className="w-100 h-100">
            <h5 className="px-2 py-1 m-0">
                <FormattedMessage id={"invoice.subheader.client"} />
            </h5>
            <SubHeaderDetails intl={intl} />
        </Card>
    );
}

export default InvoicePageSubHeader;
