import axios from 'axios'
import { FunctionComponent, useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../contexts/CartContext'

// Components
import { CartItemComponent } from '../CartItem/CartItemComponent'
import { CustomButton } from '../CustomButton/CustomButtonComponent'
import { Loading } from '../loading/loadingComponent'

// Styles
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './CheckoutStyles'

export const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoadind] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoadind(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL!}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadind(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoading && <Loading />}
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItemComponent key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>R$: {productsTotalPrice}</CheckoutTotal>

          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseClick}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}
