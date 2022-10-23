import { Product } from '../../../types/productTypes'
import { CartActionTypes } from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload
})
