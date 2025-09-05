import api from "./api"

export const getData = async () => {
  const accessToken = localStorage.getItem('accessToken')
  const response = await api.get('/account/data', {
    headers: {
      'x-access-token': accessToken,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}