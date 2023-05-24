import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const Workplace = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Workplace;