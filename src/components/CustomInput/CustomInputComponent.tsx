import { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './CustomInputStyles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}
