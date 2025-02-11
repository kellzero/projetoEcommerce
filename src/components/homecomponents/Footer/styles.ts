import { styled } from 'styled-components'
import fundo from '../../../assets/Images/fundo.png'

export const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  background: url(${fundo}) no-repeat center center/cover;
  align-items: center;
  padding: 20px 170px;
`
export const Logo = styled.img`
  margin-top: 40px;
  width: 124px;
  height: 60px;
  margin-bottom: 32px;
`
export const Links = styled.ul`
  display: flex;
  margin-bottom: 80px;
`
export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;
`

export const FooterText = styled.h1`
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 40px;
`
export const FooterLayout = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
