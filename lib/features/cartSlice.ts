import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  totalAmount: number
}

const loadCartFromLocalStorage = (): CartState => {
  const cartData =
    typeof window !== 'undefined' ? localStorage.getItem('cart') : null
  return cartData ? JSON.parse(cartData) : { items: [], totalAmount: 0 }
}

const saveCartToLocalStorage = (cart: CartState) => {
  if (typeof window !== 'undefined')
    localStorage.setItem('cart', JSON.stringify(cart))
}

const initialState: CartState = loadCartFromLocalStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        state.totalAmount += action.payload.price
        existingItem.quantity++
      } else state.items.push({ ...action.payload })
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )

      saveCartToLocalStorage(state)
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--
        state.totalAmount -= existingItem.price
      }
      saveCartToLocalStorage(state)
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity
        state.items = state.items.filter((item) => item.id !== itemId)
      }
      console.log(state.items)
      saveCartToLocalStorage(state)
      if (state.items.length === 0) localStorage.removeItem('cart')
    },
    clearCart: (state) => {
      state.items = []
      state.totalAmount = 0
      localStorage.removeItem('cart')
      saveCartToLocalStorage(state)
    },
  },
})

export const {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
