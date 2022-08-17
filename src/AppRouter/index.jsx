import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Error from '../pages/Error';

export default function AppRouter() {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/user" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    );
}
