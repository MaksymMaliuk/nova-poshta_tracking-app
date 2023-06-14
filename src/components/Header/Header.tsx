import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/NP-logo.png';

export const Header = () => (
  <Flex height='auto' p={2}>
    <a href='https://novaposhta.ua/'>
      <Image 
        maxW='100%' 
        maxH='50px' 
        src={logo} 
        alt='Nova poshta logo' 
      />
    </a>
  </Flex>
);