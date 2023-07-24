import { Response } from '../types/types';
import { post } from './fetchClient';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';

export const sendPostRequest = async (tnn: string): Promise<Response> => {
  const requestBody = {
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: tnn,
        },
      ],
    },
  };

  return await post<Response>(BASE_URL, requestBody);
};