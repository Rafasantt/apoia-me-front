import type { SignupType } from "@/types/Signup";
import api from "./api"

export const signup = async (data: SignupType) => {
  const response = await api.post('/signup', data);
  return response.data;
}