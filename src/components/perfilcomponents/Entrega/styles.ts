import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: ${cores.CorPrincipal};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.8);
  padding: 20px;
  z-index: 1000;
  h2 {
    color: ${cores.Corfundo};
    padding-left: 14px;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.Corfundo};
  }
  small {
    max-width: 100%;
  }

  input {
    background-color: ${cores.Corfundo};
    width: 100%;
    padding: 8px;
    border: 1px solid ${cores.CorPrincipal};
    font-size: 14px;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 8px;

    button {
      padding: 7px 20px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }

    button:first-child {
      background: ${cores.Corfundo};
      color: ${cores.CorPrincipal};
    }

    button:last-child {
      background: ${cores.Corfundo};
      color: ${cores.CorPrincipal};
    }
  }
`
export const CepNum = styled.div`
  display: flex;
  gap: 34px;
  align-items: stretch;
`
export const Finalizado = styled.div`
  font-weight: 400;
  color: ${cores.Corfundo};
  font-size: 14px;
  line-height: 22px;

  h2 {
    padding: 0;
    margin-bottom: 16px;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 8px;

    button {
      padding: 7px 20px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }

    button:first-child {
      background: ${cores.Corfundo};
      color: ${cores.CorPrincipal};
    }

    button:last-child {
      background: ${cores.Corfundo};
      color: ${cores.CorPrincipal};
    }
  }
`
