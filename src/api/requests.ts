import { post } from './fetchClient';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'd216233aaa8e296a5998dc8b09168fcf';

export const sendPostRequest = async (phoneNumber: string, tnn: string) => {
  const requestBody = {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: tnn,
          Phone: phoneNumber,
        },
      ],
    },
  };

  try {
    const response = await post(BASE_URL, requestBody);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};