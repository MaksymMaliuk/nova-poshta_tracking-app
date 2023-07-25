import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { OrdersPage } from './pages/OrdersPage';
import { MapPage } from './pages/MapPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Flex } from '@chakra-ui/layout';

export const App: React.FC = () => (
  <Flex direction='column' height='100vh'>
    <Header />

    <Routes>
      <Route path='/' element={<OrdersPage />} />
      <Route path='post-offices' element={<MapPage />} />
    </Routes>

    <Footer />
  </Flex>

);
