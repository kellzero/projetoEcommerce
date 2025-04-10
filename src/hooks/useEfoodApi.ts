import { useEffect, useState } from 'react'
import { EfoodApi } from '../services/api'
import { Restaurant } from 'efood-api'

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await EfoodApi.getRestaurants()
        setRestaurants(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { restaurants, loading, error }
}
