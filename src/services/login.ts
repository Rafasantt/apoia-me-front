import type { LoginType } from "@/types/Login";
import api from "./api"

export const login = async (data: LoginType) => {
  const response = await api.post('/login', data);
  return response.data;
}