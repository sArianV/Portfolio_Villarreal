import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/sandbox" element={<p>sandbox</p>} />
                <Route path="/weather" element={<p>clima</p>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;
