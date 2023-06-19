import { Response } from '../types/types';

import { post } from './fetchClient';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'd216233aaa8e296a5998dc8b09168fcf';

export const sendPostRequest = async (tnn: string): Promise<Response> => {
  const requestBody = {
    apiKey: API_KEY,
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