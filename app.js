import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login'; 
import Register from './components/Register'; 
import Products from './components/Products'; 
function App() { 
    return (
         <Router> 
            <Routes> 
                <Route path="/" element={<Products />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} /> 
            </Routes>
        </Router>
    ); 
} 
export default App; 
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Welcome To Nodejs!'));
app.listen(3000, () => console.log(`Example app listening on port ${port}!`));