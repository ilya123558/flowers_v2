import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FlowerItem {
  title: string
  src: string
}

interface IProduct {
  id: string
  title: string
  description: string
  price: number
  servicePrice: number
  points: number
  likes: number
  reviews: number
  addedToFavorites: number
  imageList: string[]
  flowersList: FlowerItem[]
  emotions: string[]
}

interface IProductState {
  currentProduct: IProduct | null
  activeImageIndex: number
  isOpenProductTagModal: boolean
  activeSizeIndex: number
  isOpenProductSizeModal: boolean
  isOpenProductServiceInfoModal: boolean
}

const initialState: IProductState = {
  currentProduct: null,
  activeImageIndex: 0,
  isOpenProductTagModal: false,
  activeSizeIndex: 0,
  isOpenProductSizeModal: false,
  isOpenProductServiceInfoModal: false,
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.currentProduct = action.payload
    },
    clearProduct: (state) => {
      state.currentProduct = null
      state.activeImageIndex = 0
      state.isOpenProductTagModal = false
      state.activeSizeIndex = 0
    },
    setActiveImageIndex: (state, action: PayloadAction<number>) => {
      state.activeImageIndex = action.payload
    },
    setIsOpenProductTagModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenProductTagModal = action.payload
    },
    setActiveSizeIndex: (state, action: PayloadAction<number>) => {
      state.activeSizeIndex = action.payload
    },
    setIsOpenProductSizeModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenProductSizeModal = action.payload
    },
    setIsOpenProductServiceInfoModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenProductServiceInfoModal = action.payload
    },
  },
})

export const {
  setProduct,
  clearProduct,
  setActiveImageIndex,
  setIsOpenProductTagModal,
  setActiveSizeIndex,
  setIsOpenProductSizeModal,
  setIsOpenProductServiceInfoModal,
} = productSlice.actions

export const productReducer = productSlice.reducer

export type { IProduct, FlowerItem }
