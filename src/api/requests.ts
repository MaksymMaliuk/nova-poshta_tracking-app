import { RequestBody } from '../types/Request';
import { Response } from '../types/types';
import { post } from './fetchClient';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = import.meta.env.VITE_API_GOOGLE_KEY;

export const orderDataRequest = async (ttn: string): Promise<Response> => {
  const requestBody: RequestBody = {
    API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: ttn,
        },
      ],
    },
  };

  return await post<Response>(BASE_URL, requestBody);
};

export const warehouseDataRequest = async (cityName: string, warehouseId: string): Promise<Response> => {
  const requestBody: RequestBody = {
    API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: cityName,
      WarehouseId: warehouseId
    },
  };

  return await post<Response>(BASE_URL, requestBody);
};