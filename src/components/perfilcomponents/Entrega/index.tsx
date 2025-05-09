import { useState } from 'react'
import { CepNum, Finalizado, Formulario, Overlay } from './styles'
import Pagamento from '../Pagamento'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface EntregaProps {
  onVoltarCarrinho: () => void
  totalCarrinho: number
  onClose: () => void
}

function Entrega({ onVoltarCarrinho, totalCarrinho, onClose }: EntregaProps) {
  const [mostrarPagamento, setMostrarPagamento] = useState(false)
  const [compraFinalizada, setCompraFinalizada] = useState(false)

  const form = useFormik({
    initialValues: {
      comprador: '',
      endereco: '',
      cidade: '',
      cep: '',
      enderecoNumber: ''
    },
    validationSchema: Yup.object({
      comprador: Yup.string().required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      enderecoNumber: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      setMostrarPagamento(true)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  const numeroPedido = useSelector(
    (state: RootState) => state.pedido.numeroPedido
  )
  const handleVoltarEntrega = () => {
    setMostrarPagamento(false)
  }

  const handleFinalizarCompra = () => {
    setCompraFinalizada(true)
  }
  const navigate = useNavigate()

  if (compraFinalizada) {
    return (
      <Overlay>
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
        <Overlay>
          <h2>Entrega</h2>
          <Formulario>
            <label htmlFor="comprador">
              Quem irá receber
              <input
                id="comprador"
                type="text"
                required
                name="comprador"
                value={form.values.comprador}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('comprador', form.errors.comprador)}
              </small>
            </label>
            <label htmlFor="endereco">
              Endereço
              <input
                id="endereco"
                type="text"
                required
                name="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
            </label>
            <label htmlFor="cidade">
              Cidade
              <input
                id="cidade"
                type="text"
                required
                name="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
            </label>
            <CepNum>
              <label htmlFor="cep">
                CEP
                <input
                  id="cep"
                  type="text"
                  required
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cep', form.errors.cep)}</small>
              </label>
              <label htmlFor="enderecoNumber">
                Número
                <input
                  id="enderecoNumber"
                  type="text"
                  required
                  name="enderecoNumber"
                  value={form.values.enderecoNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'enderecoNumber',
                    form.errors.enderecoNumber
                  )}
                </small>
              </label>
            </CepNum>
            <label>
              Complemento (opcional)
              <input type="text" />
            </label>
            <div className="botoes">
              <button type="button" onClick={() => form.handleSubmit()}>
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
