import { FunctionComponent } from 'react'

// Components
import { Checkout } from '../../components/CheckoutComponent/CheckoutComponent'
import { Header } from '../../components/Header/headerComponent'

export const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />

      <Checkout />
    </>
  )
}
