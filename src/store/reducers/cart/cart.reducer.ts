import { CartProducts } from '../../../types/CartTypes'
import { CartActionTypes } from './cart.action-types'

interface InitialState {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: CartProducts[]
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionTypes.addProductToCart: {
      const product = action.payload

      const productIsAlreadeInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productIsAlreadeInCart) {
        return {
          ...state,
          product: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        ...state,
        product: [...state.products, { ...product, quantity: 1 }]
      }
    }

    default:
      return { ...state }
  }
}
