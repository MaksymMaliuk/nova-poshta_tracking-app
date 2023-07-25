import React from 'react';
import { WarehouseData } from '../../types/Warehouse';
import { Warehouse } from '../Warehouse';
import { CSSObject } from '@emotion/react';
import { Box, UnorderedList } from '@chakra-ui/layout';

type Props = {
  warehouses: WarehouseData[]
}

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

export const WarehousesList: React.FC<Props> = ({ warehouses }) => (
  <Box
    boxShadow='0 0 4px #0000001f'
    p='18px 20px'
    borderRadius={8}
    gap={2}
    css={scrollbarStyles}
    h='300px'
    w='auto'
    overflowY='auto'
    background='#fff'
    justifyContent='center'
    alignItems='center'
  >
    <UnorderedList
      listStyleType='none'
    >
      {warehouses.map((warehouse, index) => (
        <Warehouse key={index} warehouse={warehouse} />
      ))}
    </UnorderedList>
  </Box>
);