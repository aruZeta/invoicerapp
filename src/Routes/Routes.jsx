import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/invoices/new" element={<p>New invoices yay!</p>} />
        </Routes>
    );
};

export default MyRoutes;
