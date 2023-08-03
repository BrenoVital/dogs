import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}