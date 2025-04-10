import styled from 'styled-components'
import { cores } from '../../../styles'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 32px;
  margin: 170px auto;
  padding: 40px auto;
  max-width: 1024px;
`
export const CardContainer = styled.ul`
  width: 320px;
  min-height: 340px;
  background-color: ${cores.CorPrincipal};
  position: relative;
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  overflow: hidden;
`

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
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
  margin: 8px;
  flex-grow: 1;
  overflow: hidden;
`
export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  width: calc(100% - 16px);
  height: 24px;
  margin: 8px;
  background: #ffebd9;
  color: #f05657;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #ffebd9;
  }
`
export const CardGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
`
