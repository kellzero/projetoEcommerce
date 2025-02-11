import styled from 'styled-components'
import { cores } from '../../../styles'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 80px auto;
  padding: 40px auto;
  max-width: 1366px;
`
export const CardContainer = styled.ul`
  width: 320px;
  height: 340px;
  background-color: ${cores.CorPrincipal};
  position: relative;
`

export const CardImage = styled.img`
  width: 320px;
  height: auto;
  padding: 8px;
  object-fit: cover;
`
export const CardName = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-left: 8px;
  color: ${cores.Corfundo};
`
export const CardDescription = styled.p`
  font-weight: 400px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.Corfundo};
  margin-top: 8px;
  margin-left: 8px;
`
export const Button = styled.button`
  width: 300px;
  height: 24px;
  background: #ffebd9;
  color: #f05657;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin: 8px;
  margin-top: 24px;
  &:hover {
    background: #ffebd9;
  }
`
