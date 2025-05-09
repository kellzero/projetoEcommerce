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
import Carrinho from '../Carrinho'
import { useEffect, useState } from 'react'
import { MenuItem, Restaurant } from 'efood-api'
import { useDispatch } from 'react-redux'
import { abrirCarrinho, adicionarItem } from '../../redux/store'
import { useParams } from 'react-router-dom'
import { EfoodApi } from '../../../services/api'

const PerfilList: React.FC = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurant | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [carrinhoOpen, setCarrinhoOpen] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<MenuItem | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchRestaurante = async () => {
      if (id) {
        try {
          const data = await EfoodApi.getRestaurantById(Number(id))
          setRestaurante(data)
        } catch (error) {
          console.error('Erro ao buscar restaurante', error)
        }
      }
    }
    fetchRestaurante()
  }, [id])

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + '...'
    }
    return descricao
  }
  return (
    <>
      <ListContainer>
        <CardGroup>
          {restaurante?.cardapio.slice(0, 6).map((item) => (
            <CardContainer key={item.id}>
              <CardImage src={item.foto} alt={item.nome} />
              <CardName>{item.nome}</CardName>
              <CardDescription>{getDescricao(item.descricao)}</CardDescription>
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
            dispatch(abrirCarrinho())
          }
        }}
      />
      <Carrinho
        isOpen={carrinhoOpen}
        onClose={() => setCarrinhoOpen(false)}
        onConfirm={() => setCarrinhoOpen(true)}
      />
    </>
  )
}

export default PerfilList
