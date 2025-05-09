import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CartContainer,
  Confirmar,
  ImgCarrinho,
  ItemCarrinho,
  ItemName,
  ItemPrice,
  ItenInfo,
  Overlay,
  RemoveButton,
  Sidebar,
  Total
} from './styles'
import { removerItem, RootState } from '../../redux/store'
import { gerarNumeroPedido } from './../../redux/pedidoSlice'
import lixeira from '../../../assets/Images/lixeira-de-reciclagem 1.png'
import Entrega from '../Entrega'

interface CarrinhoProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const Carrinho: React.FC<CarrinhoProps> = ({
  isOpen,
  onClose,
  onConfirm
}: CarrinhoProps) => {
  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.carrinho)
  const [mostrarEntrega, setMostrarEntrega] = useState(false)
  useEffect(() => {
    if (items.length === 0 && !mostrarEntrega) {
      onClose()
    }
  }, [items, mostrarEntrega, onClose, onConfirm])

  const closeCart = () => {
    setMostrarEntrega(false)
    onClose()
  }

  const handleVoltarCarrinho = () => {
    setMostrarEntrega(false)
  }

  const handleConfirmarEntrega = () => {
    dispatch(gerarNumeroPedido())
    setMostrarEntrega(true) // ✅ Aqui sim queremos mostrar a entrega
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay
        onClick={() => {
          console.log('Overlay do Carrinho clicado')
          closeCart()
        }}
      />
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {mostrarEntrega ? (
          <Entrega
            onVoltarCarrinho={handleVoltarCarrinho}
            totalCarrinho={total}
            onClose={closeCart}
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
      </Sidebar>
    </CartContainer>
  )
}

export default Carrinho
