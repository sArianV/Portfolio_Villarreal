import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Layout from '../layout/Layout';
import WeatherScreen from "../screens/WeatherScreen";

function Rutas() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<p>Landing page (TBD)</p>} />
                    <Route path="/sandbox" element={<p>Sandbox page (TBD)</p>} />
                    <Route path="/weather" element={ <WeatherScreen />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Rutas;
