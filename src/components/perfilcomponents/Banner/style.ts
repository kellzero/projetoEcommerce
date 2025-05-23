import { styled } from 'styled-components'

export const HeaderBanner = styled.header<{ capa: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url('${(props) => props.capa}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Span1 = styled.span`
width: 101px;
height 34px;
font-size: 32px;
color: white;
font-weight: 100;

`

export const Span2 = styled.span`
width: 680px;
height 34px;
font-size: 32px;
color: white;
font-weight: 900;`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  gap: 156px;
  width: 1030px;
`
