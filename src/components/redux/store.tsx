import { configureStore, createSlice } from '@reduxjs/toolkit'
import pedidoReducer from './pedidoSlice'

type ItemCarrinho = {
  id: number
  name: string
  price: number
  image: string
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
      state.total += action.payload.price
    },

    removerItem: (state, action: { payload: number }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].price
        state.items.splice(itemIndex, 1)
      }
    },
    toggleCarrinho: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})
export const { adicionarItem, removerItem, toggleCarrinho } =
  CarrinhoSlice.actions
const store = configureStore({
  reducer: {
    carrinho: CarrinhoSlice.reducer,
    pedido: pedidoReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
