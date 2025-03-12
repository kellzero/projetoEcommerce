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
import pizzaModal from '../../../assets/Images/pizzamodal.png'
import { adicionarItem, toggleCarrinho } from '../../redux/store'
import { useDispatch } from 'react-redux'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const item = {
  id: 1,
  name: 'Pizza Marguerita',
  price: 60.9,
  image: pizzaModal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()

  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <ModalImg src={pizzaModal} />
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContent>
          <Mtitle>Pizza Marguerita</Mtitle>
          <MInfo>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <span>Serve: de 2 a 3 pessoas</span>
          </MInfo>
          <Mbutton
            onClick={() => {
              dispatch(adicionarItem(item))
              if (isOpen) {
                dispatch(toggleCarrinho())
              }
              onClose()
            }}
          >
            Adicionar ao carrinho - R$ 60,90{' '}
          </Mbutton>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
