import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movieDetails" element={<MovieDetail />} />
          <Route path="/register" element={<Register />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default router