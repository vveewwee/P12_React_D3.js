import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '../style/GlobalStyle';
import Header from '../components/Header';
import AppRouter from '../AppRouter';
import Footer from '../components/Footer';

/**
 * Holding the Browser Router, the Header, the Footer and the GlobaStyle
 * components, the App functional component, is the child of the top level index.js
 *
 * @returns {JSX.Element} the App component
 */
export default function App() {
    return (
        <Fragment>
            <Router>
                <GlobalStyle />
                <Header />
                <AppRouter />
                <Footer />
            </Router>
        </Fragment>
    );
}
