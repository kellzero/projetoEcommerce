import { configureStore, createSlice } from '@reduxjs/toolkit'
import pedidoReducer from './pedidoSlice'

type ItemCarrinho = {
  id: number
  preco: number
  nome: string
  foto: string
  descricao: string
  porcao: string
}

const initialState: {
  items: ItemCarrinho[]
  total: number
  isOpen: boolean
} = {
  items: [],
  total: 0,
  isOpen: false
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: { payload: ItemCarrinho }) => {
      state.items.push(action.payload)
      state.total += action.payload.preco
      state.isOpen = true
    },

    removerItem: (state, action: { payload: number }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].preco
        state.items.splice(itemIndex, 1)
        if (state.items.length === 0) {
          state.isOpen = false
        }
      }
    },
    abrirCarrinho: (state) => {
      state.isOpen = true
    },
    fecharCarrinho: (state) => {
      console.log('Fechando carrinho...')
      state.isOpen = false
    },
    toggleCarrinho: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})
export const {
  adicionarItem,
  removerItem,
  toggleCarrinho,
  abrirCarrinho,
  fecharCarrinho
} = CarrinhoSlice.actions
const store = configureStore({
  reducer: {
    carrinho: CarrinhoSlice.reducer,
    pedido: pedidoReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
