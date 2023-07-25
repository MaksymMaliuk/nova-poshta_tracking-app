import React from 'react';
import { WarehouseData } from '../../types/Warehouse';
import { ListItem } from '@chakra-ui/layout';

type Props = {
  warehouse: WarehouseData
}

export const Warehouse: React.FC<Props> = ({ warehouse }) => {
  const { 
    CityDescription, 
    Description, 
    ShortAddress, 
  } = warehouse;

  return (
    <ListItem
      p='4px'
    >
      <h2>{ShortAddress}</h2>
    </ListItem>
  );
};