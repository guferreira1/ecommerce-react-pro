import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../contexts/CartContext'

// Utilities
import { CartProducts } from '../../types/CartTypes'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './CartItemStyles'

interface CartItemProps {
  product: CartProducts
}

export const CartItemComponent: FunctionComponent<CartItemProps> = ({
  product
}) => {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleRemoveItem = () => {
    removeProductFromCart(product.id)
  }

  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleDecreaseClick = () => {
    decreaseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveItem}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}
