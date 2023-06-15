import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderStatus } from './components/OrderStatus';
import { FormComponent } from './components/FormComponent';

export const App: FC = () => (
  <Flex direction="column" height='100vh'>
    <Header />

    <Flex
      flex="1"
      flexDir='column'
      alignItems="center"
      justifyContent="center"
      background="#fafafa"
    >
      <FormComponent />
      <OrderStatus />
    </Flex>

    <Footer />
  </Flex>
);
