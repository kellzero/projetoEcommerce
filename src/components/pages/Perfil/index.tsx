import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../perfilcomponents/Banner'
import Carrinho from '../../perfilcomponents/Carrinho'
import PerfilFooter from '../../perfilcomponents/Footer'
import PerfilHeader from '../../perfilcomponents/Header'
import PerfilList from '../../perfilcomponents/Listagem'
import { RootState, fecharCarrinho } from '../../redux/store'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.carrinho.isOpen)
  const { id } = useParams<{ id: string }>()
  const restaurantId = Number(id)
  const HandleCloseCart = useCallback(() => {
    dispatch(fecharCarrinho())
  }, [dispatch])
  return (
    <>
      <PerfilHeader />
      <Banner restaurantId={restaurantId} />
      <PerfilList />
      {isOpen && <Carrinho isOpen={isOpen} onClose={HandleCloseCart} />}
      <PerfilFooter />
    </>
  )
}
export default Perfil
