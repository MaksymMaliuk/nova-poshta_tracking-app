import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/NP-logo.png';

export const Header: React.FC = () => (
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

    <div>
      <Link to='/'>
        Замовлення
      </Link>
    </div>

    <div>
      <Link to='post-offices'>
        Відділення
      </Link>
    </div>
  </Flex>
);