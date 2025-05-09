import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: black;
  opacity: 0.4;
  height: 100%;
  z-index: 1000;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`
export const Sidebar = styled.aside`
  background-color: ${cores.CorPrincipal};
  z-index: 1001;
  padding: 32px 8px 0 8px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.6);
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

export const Cbutton = styled.button`
  background: ${cores.Corfundo};
  color: ${cores.CorPrincipal};
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 9999;
`
export const Wrapper = styled.div`
  position: relative;
`
