import { HeaderBanner, Span1, Span2, TextContainer } from './style'
import { useEffect, useState } from 'react'
import { Restaurant } from 'efood-api'
import { EfoodApi } from '../../../services/api'

export type Props = {
  restaurantId: number
}

const Banner = ({ restaurantId }: Props) => {
  const [restaurants, setRestaurants] = useState<Restaurant | null>(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await EfoodApi.getRestaurantById(restaurantId)
        setRestaurants(data)
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
      }
    }
    fetchRestaurant()
  }, [restaurantId])

  if (!restaurants) {
    return <p>Carregando...</p>
  }

  return (
    <HeaderBanner capa={restaurants.capa}>
      <TextContainer>
        <Span1>{restaurants.tipo}</Span1>

        <Span2>{restaurants.titulo}</Span2>
      </TextContainer>
    </HeaderBanner>
  )
}

export default Banner
