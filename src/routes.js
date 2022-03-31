import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './components/index';
import Header from './components/header';
import Footer from './components/footer';
import Cars from './components/cars';
import Login from "./components/user/login";
import Upload from './components/upload';

const Rout= () => (
    <BrowserRouter>
   
        <Header/>
        <main role="main" className="container">
    <Routes>
    
       
            
                <Route path="/" element={<Home/>}/>
                <Route path="/cars" element={<Cars/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/upload" element={<Upload/>}/>
    </Routes>
        </main>
   
    </BrowserRouter>
)

export default Rout;