import { TDeviceType } from '@/utils/hooks/useDevice'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  user: any
  deviceType: TDeviceType
}

const initialState: IInitialState = {
  user: null,
  deviceType: 'desktop'
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState['user']>) => {
      state.user = action.payload
    },
    setDeviceType: (state, action: PayloadAction<IInitialState['deviceType']>) => {
      state.deviceType = action.payload
    },
  },
})

export const { setUser, setDeviceType } = mainSlice.actions
export const mainReducer = mainSlice.reducer
