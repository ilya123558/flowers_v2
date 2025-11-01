import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  isOpen: boolean
}

const initialState: IInitialState = {
  isOpen: false,
}

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: initialState,
  reducers: {
    setOpenBasket: (state) => {
      state.isOpen = true
    },
    setCloseBasket: (state) => {
      state.isOpen = false
    },
  },
})

export const { setCloseBasket, setOpenBasket } = basketSlice.actions
export const basketReducer = basketSlice.reducer
