import { useSelector } from 'react-redux'
import Banner from '../../perfilcomponents/Banner'
import PerfilFooter from '../../perfilcomponents/Footer'
import PerfilHeader from '../../perfilcomponents/Header'
import PerfilList from '../../perfilcomponents/Listagem'
import Modal from '../../perfilcomponents/Modal/Modal'
import { RootState } from '../../redux/store'

const Perfil = () => {
  return (
    <>
      <PerfilHeader />
      <Banner />
      <PerfilList />
      <Modal />
      <PerfilFooter />
    </>
  )
}

export default Perfil
