import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies/:id" element={<Movie/>} />
    </Routes>
  );
};

export default AppRoutes;
