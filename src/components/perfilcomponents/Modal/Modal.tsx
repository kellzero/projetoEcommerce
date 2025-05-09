import {
  Overlay,
  ModalContainer,
  CloseButton,
  ModalImg,
  Mbutton,
  MInfo,
  Mtitle,
  ModalContent
} from './ModalStyles'
import React from 'react'
import { MenuItem } from 'efood-api'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  item: MenuItem | null
  onConfirm: () => void
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item, onConfirm }) => {
  if (!isOpen || !item) return null
  const HandleAdicionarAoCarrinho = (e: React.MouseEvent) => {
    e.stopPropagation()
    onConfirm()
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <ModalContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ModalImg src={item.foto} alt={item.nome} />
        <ModalContent>
          <Mtitle>{item.nome}</Mtitle>
          <MInfo>
            {item.descricao}
            <span>Serve de {item.porcao}</span>
          </MInfo>

          <Mbutton onClick={HandleAdicionarAoCarrinho}>
            Adicionar ao carrinho - R$ {item.preco.toFixed(2)}
          </Mbutton>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
