import { Route, Routes } from 'react-router-dom';

import MyHomeContainer from './Container/Home/Container';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<MyHomeContainer />} />
            <Route exact path="/invoices/new" element={<p>New invoices yay!</p>} />
        </Routes>
    );
};

export default MyRoutes;
