import { MenuItem, Restaurant } from 'efood-api'
import axios from 'axios'

const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/efood'

export const EfoodApi = {
  async getRestaurants(): Promise<Restaurant[]> {
    const response = await axios.get<Restaurant[]>(
      `${API_BASE_URL}/restaurantes`
    )
    return response.data
  },
  async getRestaurantById(id: number): Promise<Restaurant[]> {
    const response = await axios.get<Restaurant[]>(
      `${API_BASE_URL}/restaurantes/${id}`
    )
    return response.data
  },
  async getRestaurantMenu(restaurantId: number): Promise<MenuItem[]> {
    const response = await axios.get<Restaurant>(
      `${API_BASE_URL}/restaurantes/${restaurantId}`
    )
    return response.data.cardapio || []
  }
}
