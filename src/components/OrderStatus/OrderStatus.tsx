import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Response } from '../../types/types';

type Props = {
  order: Response
}

export const OrderStatus: React.FC<Props> = ({ order }) => {
  const { data } = order;
  const status = data.map(item => item.Status);
  
  return (
    <Flex 
      p='40px 24px'
      borderRadius={8}
      flexDir='column'
      gap={4}
      boxShadow='0 0 4px #0000001f'
      minW='400px'
      maxW='700px'
      height='auto' 
      background='#fff'
    >
      <div>Статус доставки: {status}</div>
      {data.map(item => {
        const {
          WarehouseSender,
          WarehouseRecipient
        } = item;

        return (
          <>
            <div>
              <b>Місце відправки:</b>
              <p>{WarehouseSender}</p>
            </div>

            <div>
              <b>Місце отримання:</b>
              <p>{WarehouseRecipient}</p>
            </div>
          </>
        );
      })}
    </Flex>
  );
};
