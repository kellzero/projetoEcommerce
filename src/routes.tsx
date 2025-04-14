import { Route, Routes } from 'react-router-dom'
import Perfil from './components/pages/Perfil'
import Home from './components/pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
