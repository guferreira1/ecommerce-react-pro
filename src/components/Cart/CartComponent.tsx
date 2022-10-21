import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../contexts/CartContext'

// Components
import { CustomButton } from '../CustomButton/CustomButtonComponent'
import { CartItemComponent } from '../CartItem/CartItemComponent'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './CartStyles'

export const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, toggleCart } =
    useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItemComponent key={product.id} product={product} />
        ))}

        <CartTotal>Total: {productsTotalPrice}</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}
