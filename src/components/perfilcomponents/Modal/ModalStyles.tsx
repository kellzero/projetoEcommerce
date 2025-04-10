import styled from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: ${cores.CorPrincipal};
  padding: 20px;
  border-radius: 8px;
  width: 1024px;
  height: 344px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.8);
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
`
export const ModalImg = styled.img`
  width: 280px;
  height: 280px;
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`
export const Mtitle = styled.h3`
  color: ${cores.Corfundo};
  font-size: 18px;
  font-weight: 900px;
  margin-top: 7px;
  margin-bottom: 8px;
  display: flex;
`
export const MInfo = styled.p`
  color: ${cores.Corfundo};
  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  flex-grow: 1;

  span {
    display: block;
    margin-top: 12px;
  }
`
export const Mbutton = styled.button`
  background: ${cores.Corfundo};
  color: ${cores.CorPrincipal};
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: ${cores.Corfundo};
`
