import { Flex } from '@chakra-ui/layout';
import { GoogleMap, GoogleMapProps, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useRef, useState } from 'react';
import { MapCenter } from '../../types/Map';

const containerStyle = {
  width: '450px',
  height: '400px'
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

type Props = {
  center: MapCenter
}

export const MapComponent: React.FC<Props> = ({ center }) => {
  const [map, setMap] = useState(undefined);
  const mapRef = useRef(undefined);

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  });

  const onLoad = useCallback(() => {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(undefined);
  }, []);
  
  return (
    isLoaded 
      ? (<Flex>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4.85}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >

        </GoogleMap>
      </Flex>

      ) : (
        <h1>Loading...</h1>
      )
  );
};