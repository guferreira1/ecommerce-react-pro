import { FunctionComponent, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

// Pages
import { HomePage } from './pages/Home/homePage'
import { LoginPage } from './pages/Login/LoginPage'
import { SignUpPage } from './pages/SignUp/SignUpPage'
import { ExplorePage } from './pages/Explore/explorePage'
import { CategoryDetailsPage } from './pages/CategoryDetails/CategoryDetails'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { PaymentConfirmationPage } from './pages/PaymentConfirmation/PaymentConfirmation'

// Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'
import { loginUser, logoutUser } from './store/toolkit/user/user.slice'
import { useAppSelector } from './hooks/redux.hooks'

// Components
import { Loading } from './components/loading/loadingComponent'
import { Cart } from './components/Cart/CartComponent'
import { AuthenticationGuard } from './guards/authentication.guard'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        dispatch(logoutUser())
        return setIsInitializing(false)
      }

      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
