import axios from 'axios';

export const post = async <T>(path: string, body?: any): Promise<T> => {
  const { data } = await axios.post<T>(path, { ...body });

  return data;
};