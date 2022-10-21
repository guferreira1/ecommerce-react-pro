import { FunctionComponent, useContext, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

// Pages
import { HomePage } from './pages/Home/homePage'
import { LoginPage } from './pages/Login/LoginPage'
import { SignUpPage } from './pages/SignUp/SignUpPage'
import { ExplorePage } from './pages/Explore/explorePage'
import { CategoryDetailsPage } from './pages/CategoryDetails/CategoryDetails'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/userContext'
import { userConverter } from './converters/firestore.converters'

// Components
import { Loading } from './components/loading/loadingComponent'
import { Cart } from './components/Cart/CartComponent'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()
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

      const useFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(useFromFirestore)
      return setIsInitializing(false)
    }

    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
