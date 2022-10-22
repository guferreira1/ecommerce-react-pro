import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities

// Components
import { Header } from '../components/Header/headerComponent'
import { Loading } from '../components/loading/loadingComponent'
import { useSelector } from 'react-redux'

export const AuthenticationGuard: FunctionComponent = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />

        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado ao login em instantes." />
      </>
    )
  }

  return <>{children}</>
}
