/* eslint-disable @typescript-eslint/no-explicit-any */
import { donation } from '@/services/donation'
import { useState } from 'react'

export const useDonation = () => {
const [sessionId] = useState<string | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const newSessionId = async (data: any) => {
    try {
      setLoading(true)
      setError(null)

      const response = await donation(data)
      console.log("Response from donation service:", response)
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
    sessionId,
    error,
    loading,
    newSessionId,
  }
}
