import { FunctionComponent } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

import { LoadingContainer } from './loadingStyles'

interface LoadingProps {
  message?: string
}

export const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
