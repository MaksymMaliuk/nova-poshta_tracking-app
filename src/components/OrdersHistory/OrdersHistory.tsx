import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Response } from '../../types/types';
import { CSSObject } from '@emotion/react';

type Props = {
  ordersHistory: Response[];
  orderHistorySelect: (tnnNumber: string) => Promise<void>;
  ordersHistoryClear: () => void;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string | null>>;
};

const scrollbarStyles: CSSObject = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#EDF2F7',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#CBD5E0',
    borderRadius: '4px',
  },
};

export const OrdersHistory: React.FC<Props> = ({
  ordersHistory,
  orderHistorySelect,
  ordersHistoryClear,
  setSelectedOrder,
}) => {
  return (
    <Flex alignItems='center' flexDirection='column'>
      <Heading mb={4} as='h3' size='md'>
        Історія операцій
      </Heading>

      <Button
        colorScheme='black'
        variant='link'
        mb='12px'
        onClick={ordersHistoryClear}
      >
        Очистити історію
      </Button>

      <Box
        boxShadow='0 0 4px #0000001f'
        p='18px 20px'
        borderRadius={8}
        gap={2}
        css={scrollbarStyles}
        h='300px'
        overflowY='auto'
        background='#fff'
        justifyContent='center'
        alignItems='center'
      >
        {ordersHistory.map(({ data }) =>
          data.map(({ Number }) => (
            <Box
              onClick={() => {
                orderHistorySelect(Number);
                setSelectedOrder(Number);
              }}
              _hover={{ background: '#E2E8F0' }}
              cursor='pointer'
              borderRadius='4px'
              p='8px 10px'
              key={Number}
            >
              {Number}
            </Box>
          ))
        )}
      </Box>
    </Flex>
  );
};
