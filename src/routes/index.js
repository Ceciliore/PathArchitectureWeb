import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Homepage';
import { Header } from '../components/Header';
import { PerfilPage } from '../pages/Perfil';
import { LectureDetail } from '../pages/LectureDetail';
import { Login } from '../pages/Login';

export const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}>
                </Route>
                <Route
                    path="/palestra"
                    element={<HomePage />}>
                </Route>
                <Route
                    path="/perfil"
                    element={<PerfilPage />}>
                </Route>
                <Route
                    path="/palestra/:id"
                    element={<LectureDetail />}
                />
                <Route
                    path="/login"
                    element={<Login/>}
                />
            </Routes>
        </>
    );
};

export default Router;