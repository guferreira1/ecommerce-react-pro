import { createContext, FunctionComponent, useState } from 'react'
import { CartProducts } from '../types/CartTypes'
import { Product } from '../types/productTypes'

interface ICartContext {
  isVisible: boolean
  products: CartProducts[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

export const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProducts[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
