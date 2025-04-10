import { styled } from 'styled-components'
import fundo from '../../../assets/Images/fundo.png'

export const HeroContainer = styled.header`
  display: flex;
  height: 186px;
  justify-content: center;
  width: 100%;
  background: url(${fundo}) no-repeat center center/cover;
  align-items: center;
`

export const RestaurantsLink = styled.a`
  font-weight: 900;
  font-size: 18px;
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
  width: 696px;
  display: flex;
  justify-content: center;
  align-items: center;
`
