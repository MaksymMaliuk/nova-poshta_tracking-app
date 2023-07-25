import React from 'react';
import { Flex, Image, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/NP-logo.png';

export const Header: React.FC = () => (
  <Flex 
    height='auto' 
    p={2}
    boxShadow='0 0 4px #0000001f' 
    zIndex={1}
    gap={5}
  >
    <a href='https://novaposhta.ua/'>
      <Image 
        maxW='100%' 
        maxH='50px' 
        src={logo} 
        alt='Nova poshta logo' 
      />
    </a>

    <Tabs
      position='relative'
      variant='unstyled'
    >
      <TabList
      >
        <Tab
        >
          <Link to='/'>
            Замовлення
          </Link>
        </Tab>

        <Tab>
          <Link to='post-offices'>
            Відділення
          </Link>
        </Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="red.500"
        borderRadius="1px"
      />
    </Tabs>
    
  </Flex>
);