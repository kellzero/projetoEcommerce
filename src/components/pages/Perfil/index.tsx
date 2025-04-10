import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../perfilcomponents/Banner'
import Carrinho from '../../perfilcomponents/Carrinho'
import PerfilFooter from '../../perfilcomponents/Footer'
import PerfilHeader from '../../perfilcomponents/Header'
import PerfilList from '../../perfilcomponents/Listagem'
import { RootState, fecharCarrinho } from '../../redux/store'
import { useCallback } from 'react'

const Perfil = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.carrinho.isOpen)

  const HandleCloseCart = useCallback(() => {
    dispatch(fecharCarrinho())
  }, [dispatch])
  return (
    <>
      <PerfilHeader />
      <Banner />
      <PerfilList />
      {isOpen && <Carrinho isOpen={isOpen} onClose={HandleCloseCart} />}
      <PerfilFooter />
    </>
  )
}
export default Perfil
