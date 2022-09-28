import { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './InputErrorMessageStyles'

export const InputErrorMessage: FunctionComponent = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}
