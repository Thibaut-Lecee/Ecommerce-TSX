import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import {Toaster} from "react-hot-toast";
import Modal from "react-modal";
import Panier from "./Components/Panier/Panier";

const App = () => {
    Modal.setAppElement("#root");

    return (
        <>
            <Toaster reverseOrder={false}/>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path={'/panier'} element={<Panier/>}/>
            </Routes>
        </>
    );
}

export default App;
