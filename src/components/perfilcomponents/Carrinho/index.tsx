import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Confirmar,
  ImgCarrinho,
  ItemCarrinho,
  ItemName,
  ItemPrice,
  ItenInfo,
  Overlay,
  RemoveButton,
  Total
} from './styles'
import { removerItem, RootState } from '../../redux/store'
import { gerarNumeroPedido } from './../../redux/pedidoSlice'
import pizzacarrinho from '../../../assets/Images/pizzamodal.png'
import lixeira from '../../../assets/Images/lixeira-de-reciclagem 1.png'
import Entrega from '../Entrega'

function Carrinho() {
  const dispatch = useDispatch()
  const { items, total, isOpen } = useSelector(
    (state: RootState) => state.carrinho
  )
  const [mostrarEntrega, setMostrarEntrega] = useState(false)

  const handleConfirmarEntrega = () => {
    dispatch(gerarNumeroPedido())
    setMostrarEntrega(true)
  }

  const handleVoltarCarrinho = () => {
    setMostrarEntrega(false)
  }

  if (!isOpen) return null

  return (
    <>
      {mostrarEntrega ? (
        <Entrega
          onVoltarCarrinho={handleVoltarCarrinho}
          totalCarrinho={total}
        />
      ) : (
        <Overlay isOpen={isOpen}>
          {items.length === 0 ? (
            <p>Seu Carrinho está vazio.</p>
          ) : (
            <>
              {items.map((item, index) => (
                <ItemCarrinho key={index}>
                  <ImgCarrinho src={pizzacarrinho} />
                  <ItenInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  </ItenInfo>
                  <RemoveButton onClick={() => dispatch(removerItem(item.id))}>
                    <img src={lixeira} alt="lixeira" />
                  </RemoveButton>
                </ItemCarrinho>
              ))}
              <Total>
                Valor total: <span>R$ {total.toFixed(2)}</span>
              </Total>
              <Confirmar onClick={handleConfirmarEntrega}>
                Confirmar com a entrega
              </Confirmar>
            </>
          )}
        </Overlay>
      )}
    </>
  )
}

export default Carrinho
