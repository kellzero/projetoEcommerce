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
import sushi from '../../../assets/Images/sushi hioki.png'
import italiana from '../../../assets/Images/italiana.png'
import estrela from '../../../assets/Images/estrela.png'
import { useNavigate } from 'react-router-dom'

const Listagem = () => {
  const navigate = useNavigate()
  const items = [
    {
      id: 1,
      name: 'Hioki Sushi ',
      image: sushi,
      type: 'Japonesa',
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
      rating: 4.5,
      destaque: 'Destaque da semana'
    },

    {
      id: 2,
      name: 'La Dolce Vita Trattoria',
      image: italiana,
      type: 'Italiana',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      rating: 1.6
    },

    {
      id: 3,
      name: 'Hioki Sushi ',
      image: sushi,
      type: 'Japonesa',
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',

      rating: 4.5
    },

    {
      id: 4,
      name: 'La Dolce Vita Trattoria',
      image: italiana,
      type: 'Italiana',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',

      rating: 1.6
    },

    {
      id: 5,
      name: 'Hioki Sushi ',
      image: sushi,
      type: 'Japonesa',
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',

      rating: 4.5
    },

    {
      id: 6,
      name: 'La Dolce Vita Trattoria',
      image: italiana,
      type: 'Italiana',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',

      rating: 1.6
    }
  ]
  return (
    <ListContainer>
      {items.map((item, index) => (
        <CardContainer key={item.id}>
          <CardImage src={item.image} alt={item.name} />
          <Cardtype>{item.type}</Cardtype>
          {index === 0 && <DestaqueCard>{item.destaque}</DestaqueCard>}
          <CardRatingContainer>
            <CardName>{item.name}</CardName>
            <CardRating>
              {item.rating}
              <StarIcon src={estrela} />
            </CardRating>
          </CardRatingContainer>
          <CardDescription>{item.description}</CardDescription>
          <Button onClick={() => navigate(`/perfil/`)}>Saiba mais</Button>
        </CardContainer>
      ))}
    </ListContainer>
  )
}

export default Listagem
