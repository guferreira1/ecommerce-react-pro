import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProducts } from '../../../types/CartTypes'
import { Product } from '../../../types/productTypes'

interface InitialState {
  isVisible: boolean
  products: CartProducts[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productIsAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

        return
      }

      state.products = [...state.products, { ...product, quantity: 1 }]
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },

    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },

    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    },

    clearCartProducts: (state) => {
      state.products = []
    }
  }
})

export const {
  addProductToCart,
  clearCartProducts,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
  toggleCart
} = CartSlice.actions

export default CartSlice.reducer
