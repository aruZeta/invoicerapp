import { useLayoutEffect, useRef, useState } from "react";
import { Card, Table } from "react-bootstrap";

import MyInput from './MyInput';

const MyRow = () => {
    const taRef = useRef(null);
    const [taHeight, setTaHeight] = useState("auto"); 
    
    const handleChange = (event) => setTaHeight(event.target.value);

    useLayoutEffect(() => {
        taRef.current.style.height = "0";
        taRef.current.style.height = `${taRef.current.scrollHeight+1}px`;
    }, [taHeight]);

    return (
        <tr>
            <td>
                <MyInput
                    as="textarea"
                    className="border"
                    style={{minHeight: "calc(1.5em + 1px)", height: taHeight}}
                    onChange={handleChange}
                    childRef={taRef}
                ></MyInput>
            </td>
            <td><MyInput /></td>
            <td><MyInput /></td>
            <td><MyInput /></td>
        </tr>
    );
}

const InvoicePageBody = () =>
<Card bg="light" className="w-100">
    <Card.Body className="p-2 d-flex flex-column gap-2">
        <Table>
            <thead>
                <tr>
                    <td className="text-center">Concepto</td>
                    <td className="text-center">Cantidad</td>
                    <td className="text-center">Precio</td>
                    <td className="text-center">Importe</td>
                </tr>
            </thead>
            <tbody>
                <MyRow />
            </tbody>
        </Table>
    </Card.Body>
</Card>;

export default InvoicePageBody;
