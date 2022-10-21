import { createContext, FunctionComponent, useState } from 'react'
import { CartProducts } from '../types/CartTypes'
import { Product } from '../types/productTypes'

interface ICartContext {
  isVisible: boolean
  products: CartProducts[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {}
})

export const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProducts[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadeInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadeInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}
