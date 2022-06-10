import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import New from './Invoices/New/New';

const MyRoutes = () =>
<Routes>
    <Route exact path="/invoicerapp" element={<Home />} />
    <Route exact path="/invoicerapp/invoices/new" element={<New />} />
</Routes>;

export default MyRoutes;
