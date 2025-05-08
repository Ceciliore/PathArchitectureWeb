import React from 'react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from "./styles/global";

function App() {
    return (
        <BrowserRouter>
            <Router />
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
