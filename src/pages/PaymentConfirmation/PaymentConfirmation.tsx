import { FunctionComponent, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'

// Components
import { Header } from '../../components/Header/headerComponent'
import { CustomButton } from '../../components/CustomButton/CustomButtonComponent'

// Utilities
import Colors from '../../Theme/themeColors'
import { clearCartProducts } from '../../store/toolkit/cart/cart.slice'

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './PaymentConfirmationStyles'

export const PaymentConfirmationPage: FunctionComponent = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCartProducts())
    }
  }, [status])

  const handleGoToHomePgeClick = () => {
    navigate('/')
  }

  return (
    <>
      <Header />

      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu algum erro ao finalizar sua compra. Por favor, revise os
                dados do pagamento e tente novamente.
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePgeClick}>
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}
