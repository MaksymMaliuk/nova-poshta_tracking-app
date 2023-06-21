import React from 'react';
import { Flex } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Flex 
      maxH='80px' 
      bg="gray.200" 
      p={4}
    >
        Developed by:&nbsp;
      <a href='https://github.com/MaksymMaliuk' >
        Maksym Maliuk
      </a>
    </Flex>
  );
};