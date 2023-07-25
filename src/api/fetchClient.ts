import axios from 'axios';
import { RequestBody } from '../types/Request';

export const post = async <T>(path: string, reqBody: RequestBody): Promise<T> => {
  const { data } = await axios.post<T>(path, reqBody);

  return data;
};