import './styles/main.scss';

import { BrowserRouter } from 'react-router-dom';

import MyNavbar from './Navbar/Navbar';
import MyRoutes from './Routes';

const App = () => {
    return (
        <div id="App" className="min-vh-100 d-flex flex-column">
            <BrowserRouter>
                <MyNavbar />
                <MyRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
