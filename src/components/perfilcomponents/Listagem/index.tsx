import {
  Button,
  CardContainer,
  CardDescription,
  CardGroup,
  CardImage,
  CardName,
  ListContainer
} from './style'

import Modal from '../Modal/Modal'
import { useState } from 'react'
import { useRestaurants } from '../../../hooks/useEfoodApi'
import { MenuItem } from 'efood-api'
import { useDispatch } from 'react-redux'
import { adicionarItem } from '../../redux/store'
import Carrinho from '../Carrinho'

const PerfilList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [carrinhoOpen, setCarrinhoOpen] = useState(false)
  const { restaurants, loading, error } = useRestaurants()
  const [itemSelecionado, setItemSelecionado] = useState<MenuItem | null>(null)
  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + '...'
    }
    return descricao
  }

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar restaurantes</div>

  return (
    <>
      <ListContainer>
        {restaurants.slice(0, 3).map((restaurante, index) => (
          <CardGroup key={`group-${index}`}>
            {restaurante.cardapio.slice(0, 2).map((item) => (
              <CardContainer key={item.id}>
                <CardImage src={item.foto} alt={item.nome} />
                <CardName>{item.nome}</CardName>
                <CardDescription>
                  {getDescricao(item.descricao)}
                </CardDescription>
                <Button
                  onClick={() => {
                    setItemSelecionado(item)
                    setModalOpen(true)
                  }}
                >
                  Adicionar ao carrinho
                </Button>
              </CardContainer>
            ))}
          </CardGroup>
        ))}
      </ListContainer>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setItemSelecionado(null)
        }}
        item={itemSelecionado}
        onConfirm={() => {
          if (itemSelecionado) {
            dispatch(adicionarItem(itemSelecionado))
            setCarrinhoOpen(true)
          }
        }}
      />
      <Carrinho isOpen={carrinhoOpen} onClose={() => setCarrinhoOpen(false)} />
    </>
  )
}

export default PerfilList
