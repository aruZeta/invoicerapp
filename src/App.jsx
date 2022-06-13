import './styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';

import MyNavbar from './Navbar/Navbar';
import MyRoutes from './Routes/Routes';

const messages = require('./Intl.json');

const App = () => {
    const [locale, setLocale] = useState("en");

    const getAllLocales = () => {
        const locales = [];
        for (let lang in messages) {
            locales.push([
                lang,
                messages[lang].flag,
                messages[lang].name
            ]);
        }
        return locales;
    }

    return (
        <div id="App" className="min-vh-100 d-flex flex-column">
            <IntlProvider locale={locale} messages={messages[locale]}>
                <BrowserRouter>
                    <MyNavbar
                        actualLocale={[
                            messages[locale].flag,
                            messages[locale].name
                        ]}
                        allLocales={getAllLocales()}
                        onClickHandler={setLocale}
                    />
                    <MyRoutes />
                </BrowserRouter>
            </IntlProvider>
        </div>
    );
};

export default App;
