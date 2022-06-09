import './styles/main.scss';

import MyNavbar from './Navbar/Navbar';
import MyHomeContainer from './Container/Home/Container';

const App = () => {
    return (
        <div id="App" className="min-vh-100 d-flex flex-column">
            <MyNavbar />
            <MyHomeContainer />
        </div>
    );
}

export default App;
