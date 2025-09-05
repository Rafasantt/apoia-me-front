import { login } from '@/services/login'
import type { LoginType } from '@/types/Login'
import { useState } from 'react'

export const useLogin = () => {
const [accessToken] = useState<string | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const newLogin = async (data: LoginType) => {
    try {
      setLoading(true)
      setError(null)

      const response = await login(data)
      localStorage.setItem("accessToken", response.userData.accessToken);
      localStorage.setItem("slug", response.userData.slug);
      return response; // Assuming the response contains a URL
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as { response?: { data?: { error?: string } } }
        setError(axiosErr.response?.data?.error ?? "Erro inesperado")
      } else {
        setError("Erro inesperado")
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    accessToken,
    error,
    loading,
    newLogin,
  }
}
