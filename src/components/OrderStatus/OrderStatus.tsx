import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

export const OrderStatus: FC = () => {
  return  (
    <Flex 
      p='40px 24px'
      borderRadius={8}
      flexDir='column'
      gap={4}
      boxShadow='0 0 4px #0000001f'
      minW='400px' 
      height='auto' 
      background='#fff'
    >
      <div>Статус доставки: Одержано</div>

      <div>
        <b>Відправлено:</b>
        <p>Відділення №17 (до 30кг): вул. Розумовська, 29</p>
      </div>

      <div>
        <b>Отримано:</b>
        <p>Відділення №3 (до 30кг): просп. Гагаріна, 43</p>
      </div>
    </Flex>
  );
};