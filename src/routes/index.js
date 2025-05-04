import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Homepage';
import { Header } from '../components/Header';

export const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}>
                </Route>
            </Routes>
        </>
    );
};

export default Router;