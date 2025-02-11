import { HeaderBanner, Span1, Span2, TextContainer } from './style'
import banner from '../../../assets/Images/banner italiana.png'

const Banner = () => (
  <HeaderBanner image={banner}>
    <TextContainer>
      <Span1>Italiana</Span1>

      <Span2>La Dolce Vita Trattoria</Span2>
    </TextContainer>
  </HeaderBanner>
)

export default Banner
