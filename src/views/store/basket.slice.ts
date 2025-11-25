import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  count: number
  isOpen: boolean
}

const initialState: IInitialState = {
  count: 3,
  isOpen: false,
}

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: initialState,
  reducers: {
    incCount: (state) => {
      state.count = state.count !== 99 ? state.count + 1 : 99
    },
    decCount: (state) => {
      state.count = state.count !== 0 ? state.count - 1 : 0
    },
    setOpenBasket: (state) => {
      state.isOpen = true
    },
    setCloseBasket: (state) => {
      state.isOpen = false
    },
  },
})

export const { setCloseBasket, setOpenBasket, decCount, incCount } = basketSlice.actions
export const basketReducer = basketSlice.reducer
