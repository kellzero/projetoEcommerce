import { useEffect, useState } from 'react'
import { EfoodApi } from '../services/api'
import { MenuItem } from 'efood-api'

export function useRestaurantMenu(restaurantId: number) {
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!restaurantId) return
    setLoading(true)
    EfoodApi.getRestaurantMenu(restaurantId)
      .then((data) => {
        setMenu(data)
        setError(null)
      })
      .catch((err) => {
        setError(err)
        setMenu([])
      })
      .finally(() => setLoading(false))
  }, [restaurantId])
  return { menu, loading, error }
}
