import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities
import { UserContext } from '../contexts/userContext'

// Components
import { Header } from '../components/Header/headerComponent'
import { Loading } from '../components/loading/loadingComponent'

export const AuthenticationGuard: FunctionComponent = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

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
