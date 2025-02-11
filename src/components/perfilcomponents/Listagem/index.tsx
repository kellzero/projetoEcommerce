import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/modalSlice'
import {
  Button,
  CardContainer,
  CardDescription,
  CardImage,
  CardName,
  ListContainer
} from './style'
import pizza from '../../../assets/Images/pizza.png'

const PerfilList = () => {
  const dispatch = useDispatch()
  const items = [
    {
      id: 1,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 2,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 3,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 4,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 5,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 6,
      name: 'Pizza Marguerita',
      image: pizza,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
  ]

  return (
    <ListContainer>
      {items.map((item) => (
        <CardContainer key={item.id}>
          <CardImage src={item.image} alt={item.name} />
          <CardName>{item.name}</CardName>
          <CardDescription>{item.description}</CardDescription>
          <Button onClick={() => dispatch(openModal())}>
            Adicionar ao carrinho
          </Button>
        </CardContainer>
      ))}
    </ListContainer>
  )
}
export default PerfilList
