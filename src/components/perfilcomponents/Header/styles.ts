import { styled } from 'styled-components'
import fundo from '../../../assets/Images/fundo.png'

export const HeroContainer = styled.header`
  display: flex;
  height: 186px;
  justify-content: center;
  background: url(${fundo}) no-repeat center center/cover;
  align-items: center;
  padding: 0 170px;
`

export const RestaurantsLink = styled.a`
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
`

export const CarrinhoSpan = styled.span`
  font-weight: 900;
  font-size: 18px;
  align-items: right;
`

export const Logo = styled.img`
  display: block;
  object-fit: contain;
  width: 124px;
  height: 60px;
  margin: 0 58px;
`
export const HeroLayout = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
