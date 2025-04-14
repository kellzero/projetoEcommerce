import {
  Button,
  CardContainer,
  CardDescription,
  CardImage,
  CardName,
  CardRating,
  CardRatingContainer,
  Cardtype,
  DestaqueCard,
  ListContainer,
  StarIcon
} from './style'
import estrela from '../../../assets/Images/estrela.png'
import { useNavigate } from 'react-router-dom'
import { useRestaurants } from '../../../hooks/useEfoodApi'

const Listagem = () => {
  const { restaurants, loading, error } = useRestaurants()
  const navigate = useNavigate()

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error.message}</div>

  return (
    <ListContainer>
      {restaurants.map((restaurants, index) => (
        <CardContainer key={restaurants.id}>
          <CardImage src={restaurants.capa} alt={restaurants.titulo} />
          <Cardtype>{restaurants.tipo}</Cardtype>
          {index === 0 && <DestaqueCard>Destaque</DestaqueCard>}
          <CardRatingContainer>
            <CardName>{restaurants.titulo}</CardName>
            <CardRating>
              {restaurants.avaliacao}
              <StarIcon src={estrela} />
            </CardRating>
          </CardRatingContainer>
          <CardDescription>{restaurants.descricao}</CardDescription>
          <Button onClick={() => navigate(`/perfil/${restaurants.id}`)}>
            Saiba mais
          </Button>
        </CardContainer>
      ))}
    </ListContainer>
  )
}

export default Listagem
