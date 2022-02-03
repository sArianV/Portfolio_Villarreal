import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Layout from '../layout/Layout';

function Rutas() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<p>home</p>} />
                    <Route path="/sandbox" element={<p>sandbox</p>} />
                    <Route path="/weather" element={<p>clima</p>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Rutas;
