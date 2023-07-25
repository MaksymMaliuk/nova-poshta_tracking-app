import React, { useState } from 'react';
import { MapComponent } from '../components/MapComponent';
import { Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { warehouseDataRequest } from '../api/requests';
import { WarehouseData } from '../types/Warehouse';
import { WarehousesList } from '../components/WarehousesList';
import { Button } from '@chakra-ui/button';
import { MapCenter } from '../types/Map';

const center = {
  lat: 48.745736308404624,
  lng: 32.16866785263217
};

export const MapPage: React.FC = () => {
  const [warehouses, setWarehouses] = useState<WarehouseData[]>();
  const [cityName, setCityName] = useState('');
  const [warehouseId, setWarehouseId] = useState('');
  const [mapPosition, setMapPosition] = useState<MapCenter>(center);
  const [mapZoom, setMapZoom] = useState(4.85);


  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = event.target.value;
    setCityName(cityName);
  };
  
  const handleChangeWarehouseId = (event: React.ChangeEvent<HTMLInputElement>) => {
    const warehouseId = event.target.value;
    setWarehouseId(warehouseId);
  };

  const handleSubmit = () => {
    warehouseDataRequest(cityName, warehouseId)
      .then((response) => {
        setWarehouses(response.data);
        return response.data;
      })
      .then((data) => {
        if (warehouseId) {
          const item = data[0];
          const newPosition = {
            lat: Number(item.Latitude),
            lng: Number(item.Longitude)
          };
          setMapZoom(15);
          setMapPosition(newPosition);
        } else {
          console.error('No valid data found in the response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Flex 
      flex='1' 
      alignItems='center' 
      background='#fafafa'
      justifyContent='center'
      gap={10}
    >
      <MapComponent center={mapPosition} zoom={mapZoom} />
      <Flex
        flexDir='column'
        gap={5}
        w='400px'
      >
        <Input
          background='#fff'
          placeholder='Виберіть місто'
          width='auto'
          onChange={handleChangeCity}
          value={cityName}
        />

        <Input
          background='#fff'
          placeholder='Введіть номер відділення'
          width='auto'
          onChange={handleChangeWarehouseId}
          value={warehouseId}
        />

        <Button type='submit' colorScheme='red' onClick={handleSubmit}>
          Знайти відділення
        </Button>
        
        {warehouses && <WarehousesList warehouses={warehouses}/>}
      </Flex>
      
    </Flex>
  );
};