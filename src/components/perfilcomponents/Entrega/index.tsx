import { useState } from 'react'
import { CepNum, Finalizado, Formulario, Overlay } from './styles'
import Pagamento from '../Pagamento'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'

interface EntregaProps {
  onVoltarCarrinho: () => void
  totalCarrinho: number
}

function Entrega({ onVoltarCarrinho, totalCarrinho }: EntregaProps) {
  const [mostrarPagamento, setMostrarPagamento] = useState(false)
  const [compraFinalizada, setCompraFinalizada] = useState(false)

  const numeroPedido = useSelector(
    (state: RootState) => state.pedido.numeroPedido
  )
  const handleContinuarPagamento = () => {
    setMostrarPagamento(true)
  }

  const handleVoltarEntrega = () => {
    setMostrarPagamento(false)
  }

  const handleFinalizarCompra = () => {
    setCompraFinalizada(true)
  }
  const navigate = useNavigate()

  if (compraFinalizada) {
    return (
      <Overlay isOpen={true}>
        <Finalizado>
          <h2>
            {numeroPedido ? (
              <p>Número do Pedido: {numeroPedido}</p>
            ) : (
              <p>Aguardando pedido...</p>
            )}
          </h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br /> <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br /> <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <div className="botoes">
            <button type="button" onClick={() => navigate(`/`)}>
              Concluir
            </button>
          </div>
        </Finalizado>
      </Overlay>
    )
  }

  return (
    <>
      {mostrarPagamento ? (
        <Pagamento
          onVoltarEntrega={handleVoltarEntrega}
          onFinalizar={handleFinalizarCompra}
          totalCarrinho={totalCarrinho}
        />
      ) : (
        <Overlay isOpen={true}>
          <h2>Entrega</h2>
          <Formulario>
            <label>
              Quem irá receber
              <input type="text" required />
            </label>
            <label>
              Endereço
              <input type="text" required />
            </label>
            <label>
              Cidade
              <input type="text" required />
            </label>
            <CepNum>
              <label>
                CEP
                <input type="text" required />
              </label>
              <label>
                Número
                <input type="text" required />
              </label>
            </CepNum>
            <label>
              Complemento (opcional)
              <input type="text" />
            </label>
            <div className="botoes">
              <button type="button" onClick={handleContinuarPagamento}>
                Continuar com o pagamento
              </button>
              <button type="button" onClick={onVoltarCarrinho}>
                Voltar para o Carrinho
              </button>
            </div>
          </Formulario>
        </Overlay>
      )}
    </>
  )
}

export default Entrega
