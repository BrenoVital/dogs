import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
