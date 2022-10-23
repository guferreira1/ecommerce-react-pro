import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BsCartCheck } from 'react-icons/bs'

// Utilities

import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/cart/cart.actions'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../store/reducers/cart/cart.selectors'

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
  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selectProductsCount)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleChekoutClick = () => {
    navigate('/checkout')

    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItemComponent key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: {productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleChekoutClick}>
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}
