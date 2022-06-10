import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import New from './Invoices/New/New';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/invoices/new" element={<New />} />
        </Routes>
    );
};

export default MyRoutes;
