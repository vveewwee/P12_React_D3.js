import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from '../provider';
import Error from '../pages/Error';

export default function AppRouter() {
    const id = 18;
    console.log("id:", id);
    return (
        <Fragment>
            <Routes>
                <Route exact path="/user" element={<Provider id={id} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    );
}
