import { createSlice } from '@reduxjs/toolkit'

const pedidoSlice = createSlice({
  name: 'pedido',
  initialState: {
    numeroPedido: null as string | null
  },
  reducers: {
    gerarNumeroPedido: (state) => {
      state.numeroPedido = `${Math.floor(Math.random() * 1000000)}`
    }
  }
})

export const { gerarNumeroPedido } = pedidoSlice.actions
export default pedidoSlice.reducer
