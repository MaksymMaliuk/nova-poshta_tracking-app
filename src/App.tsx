import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OrdersPage } from './pages/OrdersPage';
import { MapPage } from './pages/MapPage';
import { Header } from './components/Header';

export const App: React.FC = () => (
  <>
    <Header />

    <Routes>
      <Route path='/' element={<OrdersPage />} />
      <Route path='post-offices' element={<MapPage />} />
    </Routes>
  </>
);
