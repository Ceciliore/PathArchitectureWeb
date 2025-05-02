import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/homepage';

export const Router = () => {
    return (
        <Routes>
            <Route
                path="/d"
                element={<HomePage />}>
            </Route>
        </Routes>
    );
};

export default Router;