import { Provider, useSelector } from 'react-redux'
import Banner from '../../perfilcomponents/Banner'
import Carrinho from '../../perfilcomponents/Carrinho'
import PerfilFooter from '../../perfilcomponents/Footer'
import PerfilHeader from '../../perfilcomponents/Header'
import PerfilList from '../../perfilcomponents/Listagem'
import store, { RootState } from '../../redux/store'

const Perfil = () => {
  const { isOpen } = useSelector((state: RootState) => state.carrinho)
  return (
    <Provider store={store}>
      <PerfilHeader />
      <Banner />
      <PerfilList />
      {isOpen && <Carrinho />}
      <PerfilFooter />
    </Provider>
  )
}

export default Perfil
