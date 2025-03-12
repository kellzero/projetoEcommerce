import { styled } from 'styled-components'
import { cores } from '../../../styles'

interface OverlayProps {
  isOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: ${cores.CorPrincipal};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.8);
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  p {
    color: ${cores.Corfundo};
  }
`
export const ItemCarrinho = styled.div`
  display: flex;
  align-items: flex-start;
  posittion: relative;
  width: 100%;
  height: 100px;
  background-color: ${cores.Corfundo};
  color: ${cores.CorPrincipal};
  margin-bottom: 8px;
  padding: 10px 16px;
  box-sizing: border-box;
`
export const ImgCarrinho = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 4px auto;
`
export const ItenInfo = styled.div`
  flex: 1;

  p {
    color: ${cores.CorPrincipal};
  }
`
export const ItemName = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin-top: auto;
`
export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`
export const Total = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.Corfundo};
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  padding: 8px 0;
  box-sizing: border-box;

  span {
    font-weight: 400;
    color: ${cores.Corfundo};
  }
`
export const RemoveButton = styled.button`
  margin-left: auto;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Confirmar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 24px;
  padding: 8px;
  background: ${cores.Corfundo};
  color: ${cores.CorPrincipal};
  border: none;
  cursor: pointer;
  margin-top: 16px;
`
