import { CardInfos, Formulario, Overlay } from './styles'

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
  return (
    <Overlay isOpen={true}>
      <h2>
        Pagamento - Valor a pagar R$ <span>{totalCarrinho.toFixed(2)}</span>
      </h2>
      <Formulario>
        <label>
          Nome no cartão
          <input type="text" />
        </label>
        <CardInfos>
          <label>
            Número no cartão
            <input type="number" />
          </label>
          <label>
            CVV
            <input type="number" />
          </label>
        </CardInfos>
        <CardInfos>
          <label>
            Mês de vencimento
            <input type="number" />
          </label>
          <label>
            Ano de vencimento
            <input type="number" />
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
