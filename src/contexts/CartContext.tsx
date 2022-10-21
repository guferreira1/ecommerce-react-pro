import { createContext, FunctionComponent, useState } from 'react'
import { CartProducts } from '../types/CartTypes'

interface ICartContext {
  isVisible: boolean
  products: CartProducts[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

export const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProducts[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
