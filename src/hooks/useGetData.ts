/* eslint-disable @typescript-eslint/no-explicit-any */
import { getData } from '@/services/getAccountData'
import type { AccountWithDonationsModel } from '@/types/Account'
import { useState } from 'react'

export const useGetData = () => {
  const [accounData, setAccountData] = useState<AccountWithDonationsModel | null >(null)
  const [error, setError] = useState<string | null>(null)

  const getAccountData = async () => {
    try {
      const data = await getData()
      setAccountData(data)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao buscar os anúncios')
    }
  }

  return {
    error,
    setError,
    accounData,
    setAccountData,
    getAccountData
  }
}
