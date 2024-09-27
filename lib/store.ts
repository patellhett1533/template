import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import toastSlice from './features/toastSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      toast: toastSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore
