import { Product } from './productTypes'

export interface CartProducts extends Product {
  quantity: number
}
