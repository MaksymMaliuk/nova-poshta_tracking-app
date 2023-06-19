import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Response } from '../../types/types';

type Props = {
  ordersHistory: Response[];
}

export const OrdersHistory: React.FC<Props> = ({ ordersHistory }) => {

  return (
    <Flex 
      flexDir='column'
      ml={10}
      p={2} 
      gap={2} 
      justifyContent='center' 
      alignItems='center'
    >
      <h2>Історія операцій</h2>

      {ordersHistory.map(item => item.data.map(i =>(
        <div key={i.Number}>{i.Number}</div>
      )))}
    </Flex>
  );
};