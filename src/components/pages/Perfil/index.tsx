import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../perfilcomponents/Banner'
import Carrinho from '../../perfilcomponents/Carrinho'
import PerfilFooter from '../../perfilcomponents/Footer'
import PerfilHeader from '../../perfilcomponents/Header'
import PerfilList from '../../perfilcomponents/Listagem'
import { RootState, fecharCarrinho } from '../../redux/store'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import Entrega from '../../perfilcomponents/Entrega'
import { gerarNumeroPedido } from '../../redux/pedidoSlice'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const isOpen = useSelector((state: RootState) => state.carrinho.isOpen)
  const restaurantId = Number(id)
  const total = useSelector((state: RootState) => state.carrinho.total)
  const [mostrarEntrega, setMostrarEntrega] = useState(false)
  const dispatch = useDispatch()

  const handleConfirmarEntrega = () => {
    dispatch(gerarNumeroPedido())
    setMostrarEntrega(true)
  }

  const handleFecharCarrinho = useCallback(() => {
    setMostrarEntrega(false)
    dispatch(fecharCarrinho())
  }, [dispatch])

  return (
    <>
      <PerfilHeader />
      <Banner restaurantId={restaurantId} />
      <PerfilList />

      {isOpen && !mostrarEntrega && (
        <Carrinho
          isOpen={isOpen}
          onClose={handleFecharCarrinho}
          onConfirm={handleConfirmarEntrega}
        />
      )}

      {isOpen && mostrarEntrega && (
        <Entrega
          totalCarrinho={total}
          onVoltarCarrinho={() => setMostrarEntrega(false)}
          onClose={handleFecharCarrinho}
        />
      )}

      <PerfilFooter />
    </>
  )
}
export default Perfil
