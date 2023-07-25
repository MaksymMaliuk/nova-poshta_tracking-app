import React, { useEffect, useState } from 'react';
import { MapComponent } from '../components/MapComponent';
import { Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { warehouseDataRequest } from '../api/requests';
import { WarehouseData } from '../types/Warehouse';
import { WarehousesList } from '../components/WarehousesList';

const center = {
  lat: 48.745736308404624,
  lng: 32.16866785263217
};

export const MapPage: React.FC = () => {
  const [warehouses, setWarehouses] = useState<WarehouseData[]>([]);

  useEffect(() => {
    const data = warehouseDataRequest('Київ');
    data.then((response => setWarehouses(response.data)
    ));

  }, []);

  return (
    <Flex 
      flex='1' 
      alignItems='center' 
      background='#fafafa'
      justifyContent='center'
      gap={10}
    >
      <MapComponent center={center} />
      <Flex
        flexDir='column'
        gap={5}
        w='400px'
      >
        <Input
          background='#fff'
          placeholder='Виберіть місто'
          width='auto'
        />
        <WarehousesList warehouses={warehouses}/>
      </Flex>
      
    </Flex>
  );
};