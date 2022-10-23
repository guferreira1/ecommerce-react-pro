import { Product } from '../../../types/productTypes'
import { CartActionTypes } from './cart.action-types'

interface ToggleCarAction {
  type: typeof CartActionTypes.toggleCart
}

export const toggleCart = (): ToggleCarAction => ({
  type: CartActionTypes.toggleCart
})

interface AddProductToCartAction {
  type: typeof CartActionTypes.addProductToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionTypes.addProductToCart,
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionTypes.increaseCartProductQuantity
  payload: string
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

interface ClearCartProductsAction {
  type: typeof CartActionTypes.clearCartProducts
}

export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionTypes.clearCartProducts
})

export type CartActions =
  | ToggleCarAction
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | ClearCartProductsAction
