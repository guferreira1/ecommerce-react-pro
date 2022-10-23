import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { CartContext } from '../../contexts/CartContext'
import { toggleCart } from '../../store/reducers/cart/cart.actions'
import { logoutUser } from '../../store/reducers/user/user.actions'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './headerStyles'

export const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { productsCount } = useContext(CartContext)

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const hndleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={hndleSignOutClick}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 8 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
