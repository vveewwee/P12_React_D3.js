import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Error from '../pages/Error';

export default function AppRouter() {
    const id = 12;
    return (
        <Fragment>
            <Routes>
                <Route exact path="/user" element={<Profile id={id} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    );
}
