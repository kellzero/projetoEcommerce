import { useFormik } from 'formik'
import { CardInfos, Formulario, Overlay } from './styles'
import * as Yup from 'yup'

interface PagamentoProps {
  onVoltarEntrega: () => void
  onFinalizar: () => void
  totalCarrinho: number
}

function Pagamento({
  onVoltarEntrega,
  onFinalizar,
  totalCarrinho
}: PagamentoProps) {
  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string().required('O campo é obrigatório'),
      numeroCartao: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      mesVencimento: Yup.string().required('O campo é obrigatório'),
      anoVencimento: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <Overlay isOpen={true}>
      <h2>
        Pagamento - Valor a pagar R$ <span>{totalCarrinho.toFixed(2)}</span>
      </h2>
      <Formulario>
        <label htmlFor="nomeCartao">
          Nome no cartão
          <input
            id="nomeCartao"
            type="text"
            required
            name="nomeCartao"
            value={form.values.nomeCartao}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('nomeCartao', form.errors.nomeCartao)}</small>
        </label>
        <CardInfos>
          <label htmlFor="numeroCartao">
            Número no cartão
            <input
              id="numeroCartao"
              type="number"
              required
              name="numeroCartao"
              value={form.values.numeroCartao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('numeroCartao', form.errors.numeroCartao)}
            </small>
          </label>
          <label htmlFor="cvv">
            CVV
            <input
              id="cvv"
              type="number"
              required
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
          </label>
        </CardInfos>
        <CardInfos>
          <label htmlFor="mesVencimento">
            Mês de vencimento
            <input
              id="mesVencimento"
              type="number"
              required
              name="mesVencimento"
              value={form.values.mesVencimento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('mesVencimento', form.errors.mesVencimento)}
            </small>
          </label>
          <label htmlFor="anoVencimento">
            Ano de vencimento
            <input
              id="anoVencimento"
              type="number"
              required
              name="anoVencimento"
              value={form.values.anoVencimento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('anoVencimento', form.errors.anoVencimento)}
            </small>
          </label>
        </CardInfos>
        <div className="botoes">
          <button type="button" onClick={onFinalizar}>
            Finalizar pagamento
          </button>
          <button type="button" onClick={onVoltarEntrega}>
            Voltar para edição de endereço
          </button>
        </div>
      </Formulario>
    </Overlay>
  )
}

export default Pagamento
