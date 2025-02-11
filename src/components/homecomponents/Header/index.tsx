import { HeroContainer, HeroLayout, HeroText, Logo } from './styles'
import logo from '../../../assets/Images/logo.png'

const Header = () => {
  return (
    <HeroContainer>
      <HeroLayout>
        <Logo src={logo} alt="eFood-Logo" />
        <HeroText>
          Viva experiências gastronômicas no conforto da sua casa
        </HeroText>
      </HeroLayout>
    </HeroContainer>
  )
}

export default Header
