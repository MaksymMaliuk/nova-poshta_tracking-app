import React from 'react';
import { MapComponent } from '../components/MapComponent';
import { Flex } from '@chakra-ui/layout';

const center = {
  lat: 48.745736308404624,
  lng: 32.16866785263217
};

export const MapPage: React.FC = () => (
  <Flex 
    flex='1' 
    alignItems='center' 
    background='#fafafa' 
    justifyContent='center' 
    gap={10}
  >
    <MapComponent center={center} />
  </Flex>
);