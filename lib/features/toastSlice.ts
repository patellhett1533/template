import { createSlice } from '@reduxjs/toolkit'

interface PopupState {
  message: string | null
  isVisible: boolean
}

const initialState: PopupState = {
  message: null,
  isVisible: false,
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.message = action.payload
      state.isVisible = true
    },
    hidePopup: (state) => {
      state.message = null
      state.isVisible = false
    },
  },
})

export const { showPopup, hidePopup } = popupSlice.actions
export default popupSlice.reducer
