import {
  FooterContainer,
  FooterLayout,
  FooterText,
  Links,
  Logo,
  Link
} from './styles'
import logo from '../../../assets/Images/logo.png'
import facebook from '../../../assets/Images/facebook.png'
import instagram from '../../../assets/Images/insta.png'
import twiter from '../../../assets/Images/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterLayout>
          <Logo src={logo} alt="eFood-Logo" />
          <Links>
            <li>
              <Link href="facebook.com">
                <img src={facebook} />
              </Link>
            </li>
            <li>
              <Link href="instagram.com">
                {' '}
                <img src={instagram} />
              </Link>
            </li>
            <li>
              <Link href="twitter.com">
                <img src={twiter} />
              </Link>
            </li>
          </Links>
          <FooterText>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </FooterText>
        </FooterLayout>
      </div>
    </FooterContainer>
  )
}

export default Footer
