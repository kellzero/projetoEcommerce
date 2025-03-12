import { styled } from 'styled-components'
import fundo from '../../../assets/Images/fundo.png'

export const HeroContainer = styled.header`
  display: flex;
  height: 384px;
  justify-content: center;
  background: url(${fundo}) no-repeat center center/cover;
  align-items: center;
  padding: 20px 170px;
`
export const Logo = styled.img`
  width: 124px;
  height: 60px;
  margin-top: 70px;
  margin-bottom: 90px;
`
export const HeroText = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
`
export const HeroLayout = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
