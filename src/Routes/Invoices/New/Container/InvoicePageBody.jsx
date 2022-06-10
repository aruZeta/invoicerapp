import { useLayoutEffect, useRef, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

import MyInput from './MyInput';

const TableEntrie = () => {
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
                    style={{minHeight: "calc(1.5em + 1px)", height: taHeight}}
                    onChange={handleChange}
                    childRef={taRef}
                ></MyInput>
            </td>
            <td><MyInput className="text-end" /></td>
            <td><MyInput className="text-end" /></td>
            <td><MyInput className="text-end" /></td>
        </tr>
    );
}

const InvoicePageBody = () => {
    const [tableEntriesCount, setTableEntriesCount] = useState(() => {
        return 1;
    });

    const addTableEntrie = () => {
        setTableEntriesCount(tableEntriesCount + 1);
    };

    const handleClick = () => {
        return () => addTableEntrie();
    }

    const tableEntriesExtra = () => {
        const invoicePages = [];
        for (let i = 1; i < tableEntriesCount; i++) {
            invoicePages.push(
                <TableEntrie key={i} />
            )
        }

        return invoicePages;
    }

    return (
        <Card bg="light" className="w-100">
            <Card.Body className="p-2 d-flex flex-column gap-2">
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <td className="text-center">Concepto</td>
                            <td className="text-end">Cantidad</td>
                            <td className="text-end">Precio</td>
                            <td className="text-end">Importe</td>
                        </tr>
                    </thead>
                    <tbody>
                        <TableEntrie />
                        {tableEntriesExtra()}
                    </tbody>
                </Table>
                <Button
                    onClick={handleClick()}
                    variant="dark"
                    className="w-100 d-block"
                >
                    New Entrie
                </Button>
            </Card.Body>
        </Card>
    );
}

export default InvoicePageBody;
