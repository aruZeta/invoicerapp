import { Form } from "react-bootstrap";

const MyInput = ({type, placeholder, className, required}) =>
<Form.Control
    className={`lh-0 py-0 px-1 border-0 border-bottom border-1 rounded-0 ${className}`}
    type={type}
    placeholder={placeholder}
    required={required ? true : false}
/>;

export default MyInput;
