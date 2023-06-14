import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App: FC = () => (
  <Flex direction="column" height='100vh'>
    <Header />

    <Flex
      flex="1"
      alignItems="center"
      justifyContent="center"
      background="#fafafa"
    >
    </Flex>

    <Footer />
  </Flex>
);
