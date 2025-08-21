/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api"

export const donation = async (data: any) => {
  const response = await api.post('/donation', data);
  return response.data;
}