import { Button, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { LinkContainer } from 'react-router-bootstrap';

const MyContainer = () =>
<Container fluid="lg" className="flex-fill d-flex">
    <LinkContainer to="invoices/new" className="m-auto">
        <Button variant="success">
            <FormattedMessage id="home.newInvoiceBtn" />
        </Button>
    </LinkContainer>
</Container>;

export default MyContainer;
