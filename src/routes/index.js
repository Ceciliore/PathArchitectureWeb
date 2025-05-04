import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/homepage';
import { Header } from '../components/header';

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