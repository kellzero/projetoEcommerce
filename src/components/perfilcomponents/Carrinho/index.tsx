import { useCallback, useEffect, useState } from 'react'
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
import lixeira from '../../../assets/Images/lixeira-de-reciclagem 1.png'
import Entrega from '../Entrega'

interface CarrinhoProps {
  isOpen: boolean
  onClose: () => void
}

const Carrinho: React.FC<CarrinhoProps> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.carrinho)
  const [mostrarEntrega, setMostrarEntrega] = useState(false)
  useEffect(() => {
    if (items.length === 0 && !mostrarEntrega) {
      onClose()
    }
  }, [items, mostrarEntrega, onClose])

  const handleConfirmarEntrega = () => {
    dispatch(gerarNumeroPedido())
    setMostrarEntrega(true)
  }
  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      onClose()
    },
    [onClose]
  )

  const handleVoltarCarrinho = () => {
    setMostrarEntrega(false)
  }
  if (!isOpen) return null

  return (
    <Overlay onClick={handleClose}>
      {mostrarEntrega ? (
        <Entrega
          onVoltarCarrinho={handleVoltarCarrinho}
          totalCarrinho={total}
        />
      ) : (
        <>
          {items.map((item) => (
            <ItemCarrinho key={item.id}>
              <ImgCarrinho src={item.foto} alt={item.nome} />
              <ItenInfo>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
              </ItenInfo>
              <RemoveButton
                onClick={() => dispatch(removerItem(item.id))}
                aria-label={`Remover ${item.nome} do carrinho`}
              >
                <img src={lixeira} alt="Remover item" />
              </RemoveButton>
            </ItemCarrinho>
          ))}

          <Total>
            Valor total: <span>R$ {total.toFixed(2)}</span>
          </Total>
          <Confirmar onClick={onClose}>Continuar Comprando</Confirmar>
          <Confirmar
            onClick={handleConfirmarEntrega}
            aria-label="Confirmar pedido e continuar para entrega"
          >
            Confirmar com a entrega
          </Confirmar>
        </>
      )}
    </Overlay>
  )
}

export default Carrinho
