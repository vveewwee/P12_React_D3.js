import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from '../Provider';
import Error from '../pages/Error';

export default function AppRouter() {
    const id = 18;
    return (
        <Fragment>
            <Routes>
                <Route exact path="/user" element={<Provider id={id} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    );
}
