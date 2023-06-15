import React from 'react';
import { Flex, Image, Tab, TabList, Tabs } from '@chakra-ui/react';
import logo from '../../assets/NP-logo.png';

export const Header = () => (
  <Flex 
    height='auto' 
    p={2}
    boxShadow='0 0 4px #0000001f' 
    zIndex={1}
  >
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