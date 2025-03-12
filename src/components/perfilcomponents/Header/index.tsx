import {
  CarrinhoSpan,
  HeroContainer,
  HeroLayout,
  Logo,
  RestaurantsLink
} from './styles'
import logo from '../../../assets/Images/logo.png'
import { useNavigate } from 'react-router-dom'

const PerfilHeader = () => {
  const navigate = useNavigate()
  return (
    <HeroContainer>
      <RestaurantsLink onClick={() => navigate(`/`)}>
        Restaurantes
      </RestaurantsLink>
      <HeroLayout>
        <Logo src={logo} alt="eFood-Logo" />
      </HeroLayout>
      <CarrinhoSpan>0 produto(s) no carrinho</CarrinhoSpan>
    </HeroContainer>
  )
}

export default PerfilHeader
