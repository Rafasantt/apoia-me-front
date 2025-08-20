import { signup } from '@/services/signup'
import type { SignupType } from '@/types/Signup'
import { useState } from 'react'

export const useSignup = () => {
  const [createUrl] = useState<string | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const newSignup = async (newData: SignupType) => {
    try {
      setLoading(true)
      setError(null)

      const payLoad = {
        ...newData,
        role: 'admin'
      }

      const response = await signup(payLoad)
      console.log(response.url)
      return response.url; // Assuming the response contains a URL
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
    createUrl,
    error,
    loading,
    newSignup,
  }
}
