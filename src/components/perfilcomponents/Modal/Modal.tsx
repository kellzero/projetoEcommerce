import React from 'react'
import { Overlay, ModalContent } from './ModalStyles'

interface ModalProps {
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null
  return (
    <Overlay className="modal">
      <ModalContent>
        <h2>Meu Modal</h2>
        <p>Este é um modal com Styled Components e TypeScript!</p>
      </ModalContent>
    </Overlay>
  )
}

export default Modal
