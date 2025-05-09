import {
  CarrinhoSpan,
  HeroContainer,
  HeroLayout,
  Logo,
  RestaurantsLink
} from './styles'
import logo from '../../../assets/Images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { abrirCarrinho, RootState } from '../../redux/store'

const PerfilHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.carrinho)

  const openCart = () => {
    dispatch(abrirCarrinho())
  }
  const navigate = useNavigate()
  return (
    <HeroContainer>
      <RestaurantsLink onClick={() => navigate(`/`)}>
        Restaurantes
      </RestaurantsLink>
      <HeroLayout>
        <Logo src={logo} alt="eFood-Logo" />
      </HeroLayout>
      <CarrinhoSpan onClick={openCart}>
        {items.length} produto(s) no carrinho
      </CarrinhoSpan>
    </HeroContainer>
  )
}

export default PerfilHeader
