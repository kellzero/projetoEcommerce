import styled from 'styled-components'
import { cores } from '../../../styles'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin: 80px auto;
  padding: 40px auto;
  max-width: 1024px;
`
export const CardContainer = styled.ul`
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.CorPrincipal};
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Cardtype = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  height: 26px;
  background: ${cores.CorPrincipal};
  color: #ffebd9;
  padding: 4px 8px;
  font-size: 12px;
`
export const DestaqueCard = styled.span`
  display: flex;
  position: absolute;
  justify-content: center;
  text-align: center;
  align-items: center;
  top: 16px;
  right: 16px;
  height: 26px;
  background: ${cores.CorPrincipal};
  color: #ffebd9;
  padding: 4px 8px;
  font-size: 12px;
  margin-right: 80px;
`
export const CardName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
  color: ${cores.CorPrincipal};
`
export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${cores.CorPrincipal};
  margin-top: 8px;
  margin-left: 8px;
`
export const CardRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const StarIcon = styled.img`
  position: absolute;
  margin-left: 8px;
`
export const CardRating = styled.div`
  width: 26px;
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  margin-right: 40px;
`
export const Button = styled.button`
  background: #e66767;
  color: #ffebd9;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  margin: 8px auto;
  margin-left: 8px;

  &:hover {
    background: #f05657;
  }
`
