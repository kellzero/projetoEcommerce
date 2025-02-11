import {
  CarrinhoSpan,
  HeroContainer,
  HeroLayout,
  Logo,
  RestaurantSpan
} from './styles'
import logo from '../../../assets/Images/logo.png'

const PerfilHeader = () => {
  return (
    <HeroContainer>
      <RestaurantSpan>Restaurantes</RestaurantSpan>
      <HeroLayout>
        <Logo src={logo} alt="eFood-Logo" />
      </HeroLayout>
      <CarrinhoSpan>0 produto(s) no carrinho</CarrinhoSpan>
    </HeroContainer>
  )
}

export default PerfilHeader
